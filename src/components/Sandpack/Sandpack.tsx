import React from "react";
import {
  SandpackProvider,
  SandpackPreview,
  SandpackCodeEditor,
  useSandpack,
} from "@codesandbox/sandpack-react";
// @ts-ignore
import { githubLight } from "@codesandbox/sandpack-themes";

import CustomTabs from "./CustomTabs";
import "@styles/sandpack.scss";
function Sandpack() {
  return (
    <div className="sandpack-wrapper">
      <SandpackProvider theme={githubLight} template="react">
        <CustomTabs />
        <div className="sandpack-code">
          <div className="code-editor-container">
            <div className="code-editor-wrapper">
              <SandpackCodeEditor />
            </div>
          </div>
          <SandpackPreview showRefreshButton={false} showOpenInCodeSandbox={false} />
        </div>
      </SandpackProvider>
    </div>
  );
}

export default Sandpack;
