import React, { useCallback, useState, forwardRef, useImperativeHandle, useEffect, useRef } from 'react'
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    mobileAndTabletCheck,
    

} from "webgi";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Scroll from '../lib/Scroll';

gsap.registerPlugin(ScrollTrigger)

const View = () => {

    const canvasRef = useRef(null);

    const memScroll = useCallback(
        (position, target, onUpdate) =>{
            if(position && target && onUpdate){
                Scroll(position, target, onUpdate);
            }
        }, []
    )

    const setupViewer = useCallback(async () => {
        const viewer = new ViewerApp({
            canvas: canvasRef.current,
        })

        const manager = await viewer.addPlugin(AssetManagerPlugin)

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        await viewer.addPlugin(GBufferPlugin)
        await viewer.addPlugin(new ProgressivePlugin(32))
        await viewer.addPlugin(new TonemapPlugin(true))
        await viewer.addPlugin(GammaCorrectionPlugin)
        await viewer.addPlugin(SSRPlugin)
        await viewer.addPlugin(SSAOPlugin)

        await viewer.addPlugin(BloomPlugin)

        // or use this to add all main ones at once.
        // await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.


        // // Required for downloading files from the UI
        // // await viewer.addPlugin(FileTransferPlugin)

        // // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
        // await viewer.addPlugin(CanvasSnipperPlugin)

        viewer.renderer.refreshPipeline()

        await manager.addFromPath('scene-black.glb')

        viewer.getPlugin(TonemapPlugin).config.clipBackground = true

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false})

        window.scrollTo(0,0);

        let needsUpdate = true;

        const onUpdate = () => {
            needsUpdate = true;
            viewer.setDirty();
        }

        viewer.addEventListener("preFrame", () =>{
            if(needsUpdate){
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        })
        memScroll(position, target, onUpdate);

        // Import and add a GLB file.
        // await viewer.load("../public/scene-black.glb")
    }, [])


    useEffect(() => {
        setupViewer();
    }, [])


    return (
        <div id='webgi-canvas-container'>
            <canvas id='webgi-canvas' ref={canvasRef} />
        </div>
    )
}

export default View