
export default async function (request:Promise<any>, thunkAPI: any | null) {
    try {
        return await request;
    } catch (error) {
        console.error('Error in async operation:', error);
        if (thunkAPI) {
            return thunkAPI.rejectWithValue(error);
        } else {
            throw error;
        }
    }
}
