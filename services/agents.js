// const supabase = require('./keys');

async function get(supabase,profiles_id) {
    try {
        const { data: profile, error } = await supabase
            .from('profile')
            .select('*')
            .eq('profiles_id', profiles_id);

        if (error) {
            throw error;
        }

        return profile;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}
async function getBro(supabase,id) {
    try {
        const { data, error } = await supabase
            .from('brokerage')
            .select('*')
            .eq('id', id);

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return null;
    }
}

module.exports = { get, getBro };
