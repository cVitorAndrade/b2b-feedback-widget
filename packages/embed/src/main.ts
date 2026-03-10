interface WidgetConfig {
  clientId: string;
}

const MAX_Z_INDEX_VALUE = 2147483647;

class FeedbackWidget {
  private iframe: HTMLIFrameElement | null = null;
  private mounted: boolean = false;

  constructor(config: WidgetConfig) {
    if (!config.clientId) {
      console.error(
        "🚨 B2B Widget: ID do cliente não fornecido. Injeção abortada.",
      );
      return;
    }

    console.log("🚀 B2B Widget carregando via Iframe...");
    this.iframe = document.createElement("iframe");
    this.mount();
  }

  private mount() {
    if (!this.iframe) return;

    this.iframe.src = "http://localhost:5173";

    Object.assign(this.iframe.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "380px",
      height: "600px",
      zIndex: MAX_Z_INDEX_VALUE,
      borderRadius: "16px",
      boxShadow: "10px 10px 40px rgba(0,0,0,0.16)",
      colorScheme: "light dark",
      border: "none",
    });

    document.body.appendChild(this.iframe);
  }
}

export const init = (config: WidgetConfig) => new FeedbackWidget(config);

if (import.meta.env.DEV) {
  (window as any).B2BFeedbackWidget = { init };
}
