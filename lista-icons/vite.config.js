import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/react-icons/"  // ⚠️ deve ser exatamente o nome do seu repositório
});


