/**
 * Headers de segurança.
 * CSP: o site é todo estático, então os scripts inline do Next (hidratação) e os JSON-LD precisam de
 * 'unsafe-inline' (nonce exigiria renderização dinâmica em toda página). O resto fica fechado:
 * nada de scripts de terceiros, plugins, <base> ou formulários pra fora, e o site não pode ser
 * embutido em outro. Única origem externa: o mapa do Google na página de contato.
 * Ao adicionar GTM, Analytics, pixel etc., incluir os domínios exatos aqui.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/webp"],
    // 70 nas fotos em geral; 60 na foto do hero da Home (fica sob a camada escura).
    qualities: [60, 70],
  },
  experimental: {
    // CSS embutido no HTML: tira o CSS do caminho crítico (ele é pequeno, ~10 KB).
    inlineCss: true,
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
