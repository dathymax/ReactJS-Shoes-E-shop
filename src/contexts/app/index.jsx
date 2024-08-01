import { Spin, notification } from "antd";
import React, { useContext, useMemo, useState } from "react";

export const AppContext = React.createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("useAppContext must be use within AppContextProvider!");
    }

    return context;
}

const AppContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [api, contextHolder] = notification.useNotification();
    const [productRate, setProductRate] = useState(0);
    const [productCartQuantity, setProductCartQuantity] = useState(0);

    const openNotiSuccess = (title, description) => {
        api.success({
            message: `${title} successful!`,
            description: description,
            placement: "topRight",
            duration: 2,
        });
    };

    const openNotiError = (title, description) => {
        api.error({
            message: `${title} failed!`,
            description: description,
            placement: "topRight",
            duration: 2,
        });
    };

    const values = useMemo(() => ({
        loading,
        openNotiSuccess,
        setLoading,
        openNotiError,
        productRate,
        productCartQuantity,
        setProductCartQuantity,
        setProductRate,
    }), [loading, productRate, productCartQuantity])

    return (
        <AppContext.Provider value={values}>
            <Spin spinning={loading}>{children}</Spin>
            {contextHolder}
        </AppContext.Provider>
    )
}

export default AppContextProvider;