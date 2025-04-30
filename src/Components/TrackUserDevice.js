import { useEffect } from 'react';
import supabase from '../supabaseClient'; // Adjust path if needed

const TrackUserDevice = () => {
  useEffect(() => {
    const getDevice = () => {
      const userAgent = navigator.userAgent;

      if (/android/i.test(userAgent)) return 'Android';
      if (/iPad|iPhone|iPod/.test(userAgent)) return 'iOS';
      if (/Macintosh/.test(userAgent)) return 'Mac';
      if (/Windows/.test(userAgent)) return 'Windows';
      if (/Linux/.test(userAgent)) return 'Linux';
      return 'Other';
    };

    const device = getDevice();
    const sessionId = sessionStorage.getItem('device_session_id');

    if (!sessionId) {
      const newSessionId = crypto.randomUUID();
      sessionStorage.setItem('device_session_id', newSessionId);

      supabase.from('views_by_device').insert([
        {
          device: device,
          session_id: newSessionId,
        },
      ]);
    }
  }, []);

  return null;
};

export default TrackUserDevice;
