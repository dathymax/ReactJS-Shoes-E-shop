import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import AppContextProvider from './contexts/app/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#5E59FF"
                    },
                    components: {
                        Button: {
                            controlHeightLG: 48
                        }
                    }
                }}
            >
                <AppContextProvider>
                    <App />
                </AppContextProvider>
            </ConfigProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
