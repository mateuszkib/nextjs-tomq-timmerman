import { useEffect, useRef } from 'react';

const PageProgress = () => {
  const progressWrapRef = useRef(null);
  const progressPathRef = useRef(null);

  useEffect(() => {
    // Ensure refs are attached before proceeding
    if (!progressPathRef.current || !progressWrapRef.current) return;

    const offset = 50; // Scroll offset before showing progress indicator
    const progressPath = progressPathRef.current;
    const progressWrap = progressWrapRef.current;

    // Get the total length of the SVG path for stroke animation
    const pathLength = progressPath.getTotalLength();

    // Initialize stroke dash properties for the progress path
    progressPath.style.transition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();

    // Trigger a layout reflow to apply initial styles properly
    progressPath.getBoundingClientRect();

    // Enable smooth transition for stroke dash offset changes
    progressPath.style.transition = 'stroke-dashoffset 10ms linear';

    // Scroll event handler to update progress and toggle visibility
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // Calculate progress (how much of the path should be hidden)
      const progress = pathLength - (scrollTop * pathLength) / docHeight;

      // Update stroke dash offset to reflect scroll progress
      progressPath.style.strokeDashoffset = progress.toString();

      // Toggle visibility of the progress indicator based on scroll offset
      if (scrollTop >= offset) {
        progressWrap.classList.add('active-progress');
      } else {
        progressWrap.classList.remove('active-progress');
      }
    };

    // Scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Click handler to scroll smoothly to the top when progress circle is clicked
    const handleClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    progressWrap.addEventListener('click', handleClick);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      progressWrap.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="progress-wrap" ref={progressWrapRef}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          ref={progressPathRef}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default PageProgress;
