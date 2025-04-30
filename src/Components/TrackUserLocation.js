import  supabase  from '../supabaseClient'; // adjust path if needed
import { useEffect } from 'react';

// Country code to full country name mapping


const TrackUserLocation = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      if (sessionStorage.getItem('visitorTracked')) return;

      try {
        const response = await fetch('https://ipinfo.io/json?token=YOUR_TOKEN'); // use your actual token
        const data = await response.json();
        const country = data.country;

        if (country) {
          sessionStorage.setItem('visitorTracked', 'true');

          const { data: existing, error } = await supabase
            .from('traffic_by_country')
            .select('views')
            .eq('country', country)
            .single();

            if (error) {
              console.error('Supabase insert error:', error);
            }

          if (existing) {
            await supabase
              .from('traffic_by_country')
              .update({ views: existing.views + 1 })
              .eq('country', country);
          } else {
            await supabase
              .from('traffic_by_country')
              .insert({ country, views: 1 });
          }
        }
      } catch (err) {
        console.error('Tracking error:', err);
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default TrackUserLocation;
