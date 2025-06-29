import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';
import { useNavigate } from '@remix-run/react';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  const navigate = useNavigate();

  return (
    <div style={{}}>
      <svg
        onClick={() => navigate('/')}
        aria-hidden
        className={classes(styles.monogram, className)}
        width="150"
        height="60"
        viewBox="-24 0 180 80"
        ref={ref}
        {...props}
      >
        <defs>
          <clipPath id={clipId}>
            <path
              d="M0 44.95L0 10.15L1.95 10.15L26.25 33.80L26.25 10.15L28.10 10.15L28.10 44.95L0 44.95ZM38.55 10.20L63.05 10.20L63.05 12.05L40.40 12.05L40.40 26.15L60.10 26.15L60.10 28L40.40 28L40.40 43.15L63.05 43.15L63.05 45L38.55 45L38.55 10.20ZM75.55 10.20L100.05 10.20L100.05 12.05L77.40 12.05L77.40 26.15L97.10 26.15L97.10 28L77.40 28L77.40 43.15L100.05 43.15L100.05 45L75.55 45L75.55 10.20ZM113.80 45L113.80 10.20L115.65 10.20L115.65 43.15L139.90 43.15L139.90 45L113.80 45Z"
            />
          </clipPath>
        </defs>
        <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
        {highlight && (
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.highlight} width="100%" height="100%" />
          </g>
        )}
      </svg>
      {/* <svg
        aria-hidden
        className={classes(styles.monogram, className)}
        width="200" height="70"
        viewBox="0 0 200 60"
        ref={ref}
        {...props}
      >
        <defs>
          <clipPath id={clipId}>
            <text 
              x="45" 
              y="45" 
              fontSize="70"
              fontFamily="Yellowtail, cursive"
              fontWeight="400"
              fontStyle="normal"
              textAnchor="start"
            >
              Neel
            </text>
          </clipPath>
        </defs>
        <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
        {highlight && (
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.highlight} width="100%" height="100%" />
          </g>
        )}
      </svg> */}
    </div>
  );
});
// style = {{ transform: 'scaleX(-1)' }}