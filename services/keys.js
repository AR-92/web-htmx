const { createServerClient, parse, serialize } = require('@supabase/ssr');

const url = 'https://zjhfywemboaxpglmjpaq.supabase.co';
const anon = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaGZ5d2VtYm9heHBnbG1qcGFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIxOTg3NTksImV4cCI6MjAwNzc3NDc1OX0.Qcz15s5I0rHQ3ipY7LGikpK2sigSZjeHXDv8OkQcR1k';


// Middleware to handle Supabase setup
const supabaseMiddleware = (req, res, next) => {
    const cookies = parse(req.headers.cookie || '');
    const headers = {};
    const supabaseClient = createServerClient(
        url,
        anon,
        {
            cookies: {
                get(key) {
                    // return cookies[key];
                    // const cookies = req.cookies
                    const cookie = cookies[key] ?? ''
                    return decodeURIComponent(cookie)
                },
                set(key, value, options) {
                    // res.cookie(key, value, options);
                    if (!res) return
                    res.cookie(key, encodeURIComponent(value), {
                      ...options,
                      sameSite: 'Lax',
                      httpOnly: true,
                    })
                },
                remove(key, options) {
                    // res.clearCookie(key, options);
                    if (!res) return
                    res.cookie(key, '', { ...options, httpOnly: true })
                },
            },
        },
    );
    req.supabaseClient = supabaseClient;
    req.supabaseHeaders = headers;
    next();
};

  module.exports = supabaseMiddleware