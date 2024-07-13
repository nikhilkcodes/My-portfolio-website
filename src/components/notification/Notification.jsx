import React, { useEffect } from 'react';
import { notification, Space, Button } from 'antd';

const NotificationApp = ({ defaultNotificationType }) => {
  const openNotificationWithIcon = (type) => {
    return new Promise((resolve, reject) => {
      notification[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClose: resolve // Resolve the promise when the notification is closed
      });
    });
  };

  const handleNotification = async (type) => {
    try {
      await openNotificationWithIcon(type);
      // Notification closed successfully
      console.log(`Notification of type ${type} closed.`);
    } catch (error) {
      // Handle error if notification fails
      console.error(`Notification of type ${type} failed:`, error);
    }
  };

  useEffect(() => {
    // This will trigger the notification when the component mounts
    if (defaultNotificationType) {
      handleNotification(defaultNotificationType);
    }
  }, [defaultNotificationType]);

  return (
    <>
      <Space>
        <Button onClick={() => handleNotification('success')}>Success</Button>
        <Button onClick={() => handleNotification('error')}>Error</Button>
      </Space>
    </>
  );
};

export default NotificationApp;
