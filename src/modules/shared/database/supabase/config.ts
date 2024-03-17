const password: string = process.env.DB_PASSWORD || "";

export const supabaseURL = `postgres://postgres.iyascyypadtfgeuzwnvt:${password}@aws-0-sa-east-1.pooler.supabase.com:5432/postgres`;
