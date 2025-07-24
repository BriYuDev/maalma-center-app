export async function POST(req) {
    const form = await req.formData();
    // switch (form.get('type')){
    //     case "login":
    //         break;
    //     case "register":
    //         break;
    // }
    return Response.redirect('/', 303);
}
