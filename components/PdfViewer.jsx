import { useEffect, useRef, useState } from "react";
import React from 'react'
import * as pdfjsLib from "pdfjs-dist";
import cv from "../src/public/CVPortfolio.pdf";
import AnimatedContent from "../src/components/AnimatedContent";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

const PdfViewer = () => {
  const canvasRef = useRef(null);
  const [pdfDoc, setPdfDoc] = useState(null);
  const renderingTaskRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadPdf = async () => {
      try {
        if (renderingTaskRef.current) {
          renderingTaskRef.current.cancel();
        }

        const loadingTask = pdfjsLib.getDocument(cv);
        const doc = await loadingTask.promise;

        if (!isMounted) {
          return;
        }

        setPdfDoc(doc);
        const page = await doc.getPage(1);
        const viewport = page.getViewport({ scale: 1.0 });

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        renderingTaskRef.current = page.render({
          canvasContext: context,
          viewport: viewport,
        });

        await renderingTaskRef.current.promise;
      } catch (error) {
        console.error("Failed to load PDF:", error);
      }
    };

    loadPdf();

    return () => {
      isMounted = false;
      if (renderingTaskRef.current) {
        renderingTaskRef.current.cancel();
      }
    };
  }, []);

  return (
    <AnimatedContent
      distance={0}
      direction="vertical"
      reverse
      duration={2}
      ease="power3.out"
      initialOpacity={0}
      animateOpacity
      scale={1}
      threshold={0.1}
      delay={0.3}
    >
      <canvas ref={canvasRef} className="w-full" />
    </AnimatedContent>
  );
};

export default PdfViewer;
