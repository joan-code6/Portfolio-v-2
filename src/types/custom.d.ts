declare module '../components/ColorBends' {
  import * as React from 'react';
  const ColorBends: React.ComponentType<Record<string, unknown>>;
  export default ColorBends;
}

declare module '../components/ColorBends.jsx' {
  import * as React from 'react';
  const ColorBends: React.ComponentType<Record<string, unknown>>;
  export default ColorBends;
}

declare module '*.jsx' {
  import * as React from 'react';
  const Component: React.ComponentType<Record<string, unknown>>;
  export default Component;
}

declare module '*.css';
