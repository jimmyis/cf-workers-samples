// src/odd-or-even.js
var src_default = {
    async fetch(request, env, ctx) {
        const params = parseUrlParams(request.url)

        if (typeof params.number !== "string" && !isNumber(params.number)) {
            return new Response(JSON.stringify({ "status": "Error: Number is wrong type or not specified" }))
        }

        if (isEven(params.number)) {
            return new Response(JSON.stringify({ "status": "Even number" }))
        } else {
            return new Response(JSON.stringify({ "status": "Odd number" }))
        }
    }
};

function parseUrlParams(sourceUrl) {
    const params = {}
    const url = new URL(sourceUrl)
    const queryString = url.search.slice(1).split('&')

    queryString.forEach(item => {
        const kv = item.split('=')
        if (kv[0]) params[kv[0]] = kv[1] || true
    })

    return params
}

function isNumber(chars) {
    return /^\d$/.test(chars);
}

function isEven(number) {
    return number % 2 == 0
}

export {
    src_default as default
};

//# sourceMappingURL=index.js.map
