export default async (request:any, thunkAPI:any) => {
    try {
        const result = await request();
        return result;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
}