import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "index.css") return "css/styles.css";
          return assetInfo.name;
        },
      },
    },
  },
  plugins: [react()],
})
