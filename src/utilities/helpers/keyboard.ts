export const handlePressEnter =
  (callback: () => void) => (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      callback();
    }
  };
