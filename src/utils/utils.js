import React from 'react';

export const getUrlkeys = (a_url) => {
    let w_keys = {};
    let w_parts = a_url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(a_m,a_key, a_value) { 
        w_keys[a_key] = a_value; 
    });
    
    return w_keys;
}
