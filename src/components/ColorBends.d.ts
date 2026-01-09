declare module '../components/ColorBends' {
  import * as React from 'react';
  const ColorBends: React.ComponentType<any>;
  export default ColorBends;
}

// Fallback for any .jsx imports
declare module '*.jsx' {
  import * as React from 'react';
  const Component: React.ComponentType<any>;
  export default Component;
}

// Allow importing css files without errors
declare module '*.css';
