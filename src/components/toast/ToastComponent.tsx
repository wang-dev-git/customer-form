import { useEffect, memo } from "react";

import "./styles.scss";

export interface ToastProps {
  id: string;
  destroy: () => void;
  content: string;
  type?: "default" | "success" | "warning" | "error" | "info";
  duration?: number;
  icon?: JSX.Element;
}

function Toast({ destroy, content, icon, type, duration = 3000 }: ToastProps) {
  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);
  }, [destroy, duration]);

  return (
    <div className="toast-element-root">
      <div className={`toast-wrapper ${type}`}>
        <div className="toast-body">
          {icon}
          <span className="toast-msg text-sm">{content}</span>
        </div>
      </div>
    </div>
  );
}

const shouldRerender = (prevProps: ToastProps, nextProps: ToastProps) => {
  return prevProps.id === nextProps.id;
};

export default memo(Toast, shouldRerender);
