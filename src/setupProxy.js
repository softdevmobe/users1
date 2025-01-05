const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/uploads", // مسیرهایی که می‌خواهید پروکسی شوند (مثلاً /api، /products، /users و غیره)
    createProxyMiddleware({
      target: "http://localhost:5500", // آدرس سرور backend شما
      changeOrigin: true, // بسیار مهم: برای تغییر origin درخواست و حل مشکل CORS
    })
  );

  app.use(
    "/api", // مسیرهایی که می‌خواهید پروکسی شوند (مثلاً /api، /products، /users و غیره)
    createProxyMiddleware({
      target: "http://localhost:5500", // آدرس سرور backend شما
      changeOrigin: true, // بسیار مهم: برای تغییر origin درخواست و حل مشکل CORS
    })
  );
};
