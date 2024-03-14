// // supabaseModule.js

// const supabase = require('./keys');

async function get(supabase) {
    try {
        const { data: profile, error } = await supabase
            .from('profile')
            .select('*')
        if (error) {
            throw error;
        }
        return profile;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}
async function getAllLocations(supabase) {
    try {
        const { data: locations, error } = await supabase
            .from('locations')
            .select('*')

        if (error) {
            throw error;
        }

        return locations;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}

module.exports = { get, getAllLocations };
