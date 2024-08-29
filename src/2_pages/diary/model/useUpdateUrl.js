import { useRef, useEffect } from "react";

export const useUpdateUrl = ( diaryList ) => {

    const parentRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const diaryIdx = entry.target.getAttribute('data-diary-idx');
              if (diaryIdx) {
                const newUrl = `${window.location.origin}/diary/${diaryIdx}`;
                window.history.pushState("", '', newUrl);
              }
            }
          });
        },
        {
          root: null,
          threshold: 0.5,
        }
      );
      const children = parentRef.current?.children;
      if (children) {
        Array.from(children).forEach(child => {
          observer.observe(child);
        });
      }
      return () => {
        if (children) {
          Array.from(children).forEach(child => {
            observer.unobserve(child);
          });
        }
      };
    }, [diaryList]);

    return { parentRef };
}