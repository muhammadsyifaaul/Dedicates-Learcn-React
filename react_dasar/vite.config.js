import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        contact: 'contact.html',
        task: 'task.html',
        counter: 'counter.html',
        note:'note.html',
      }
    }
  }
})
