import { useSandpack } from "@codesandbox/sandpack-react";

export default function CustomTabs() {
  const { sandpack } = useSandpack();
  const { activeFile, setActiveFile, visibleFiles } = sandpack;

  return (
    <div className="tabs">
      {visibleFiles.map((path) => (
        <button
          type="button"
          key={path}
          onClick={() => setActiveFile(path)}
          data-active={path === activeFile}
        >
          {path}
        </button>
      ))}
    </div>
  );
}
