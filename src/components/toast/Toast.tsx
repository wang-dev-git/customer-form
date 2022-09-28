import ToastComponent, { ToastProps } from "./ToastComponent";

/**
 * Toaster Manager
 */
import React from "react";
import ReactDOM from "react-dom";

interface ToastOptions {
  id?: string;
  content: string;
  duration?: number;
  type?: "default" | "success" | "warning" | "error" | "info";
  icon?: JSX.Element;
}

export default class ToastManager {
  private readonly containerRef: HTMLDivElement;
  private toasts: ToastProps[] = [];
  static toast: ToastManager;

  constructor() {
    const body = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    const toastContainer = document.createElement("div") as HTMLDivElement;
    toastContainer.id = "toast-container-main";
    toastContainer.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 9999999;
            display: flex;
            flex-direction: column;
            max-width: 250px;
            gap: 8px;
        `;
    body.insertAdjacentElement("beforeend", toastContainer);
    this.containerRef = toastContainer;
  }

  static getInstance() {
    if (!this.toast) {
      this.toast = new ToastManager();
    }
    return this.toast;
  }

  static show(options: ToastOptions): void {
    if (!options.type) options.type = "default";
    ToastManager.getInstance().show(options);
  }

  static success(options: ToastOptions | string): void {
    if (typeof options === "string") {
      ToastManager.getInstance().show({
        type: "success",
        content: options
      });
    } else {
      options.type = "success";
      ToastManager.getInstance().show(options);
    }
  }

  static error(options: ToastOptions): void {
    options.type = "error";
    ToastManager.getInstance().show(options);
  }

  static info(options: ToastOptions): void {
    options.type = "info";
    ToastManager.getInstance().show(options);
  }

  static warning(options: ToastOptions): void {
    options.type = "warning";
    ToastManager.getInstance().show(options);
  }

  static clear(): void {
    ToastManager.getInstance().clear();
  }

  public show(options: ToastOptions): void {
    const toastId = Math.random().toString(36).substr(2, 9);
    const toast: ToastProps = {
      id: toastId,
      ...options,
      destroy: () => this.destroy(options.id ?? toastId)
    };

    this.toasts = [toast, ...this.toasts];
    this.render();
  }

  public clear(): void {
    this.toasts = [];
    this.render();
  }

  public destroy(id: string): void {
    this.toasts = this.toasts.filter((toast: ToastProps) => toast.id !== id);
    this.render();
  }

  private render(): void {
    ReactDOM.render([], this.containerRef);
  }
}
