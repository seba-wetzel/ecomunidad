const googleApiKey = process.env.GOOGLE_MAPS_API_KEY || "";
export const addressValidationUrl = `https://addressvalidation.googleapis.com/v1:validateAddress?key=${googleApiKey}`;
export const plusCodeValidationUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${googleApiKey}&address=`;
export const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
