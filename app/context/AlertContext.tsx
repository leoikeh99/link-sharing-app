"use client";
import React, { useState, createContext } from "react";
import Alerts from "../components/Alert/Alerts";

type Props = {
  children: React.ReactNode;
};

const contextDefaultValues: AlertContextState = {
  alerts: [],
  createAlert: () => {},
  removeAlert: () => {},
};

const AlertContext = createContext<AlertContextState>(contextDefaultValues);

const ALERT_RUNTIME_IN_MS = 3000;

export const AlertProvider = ({ children }: Props) => {
  const [alerts, setAlerts] = useState(contextDefaultValues.alerts);

  const removeAlert = (id: string) =>
    setAlerts((values) => values.filter((value) => value.id !== id));

  const createAlert = (type: AlertTypes, message: string) => {
    const id = crypto.randomUUID();
    setAlerts((values) => [...values, { id, type, message }]);
    setTimeout(() => removeAlert(id), ALERT_RUNTIME_IN_MS);
  };

  return (
    <AlertContext.Provider
      value={{
        alerts,
        createAlert,
        removeAlert,
      }}>
      <Alerts />
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
