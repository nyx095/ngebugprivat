const axios = require('require')
const md5 = require('md5')
const { v4, v4uuid } = require('uuid')

//https://github.com/lmcsu/qq-neural-anime-tg

async function jadianime(buffer) {
    try {
        let imgData = buffer.toString('base64')

        const obj = {
            busiId: 'different_dimension_me_img_entry',
            extra: JSON.stringify({
                face_rects: [],
                version: 2,
                platform: 'web',
                data_report: {
                    parent_trace_id: v4uuid(),
                    root_channel: '',
                    level: 0,
                },
            }),
            images: [imgData],
        };
        const str = JSON.stringify(obj);
        const sign = md5(
            'https://h5.tu.qq.com' +
            (str.length + (encodeURIComponent(str).match(/%[89ABab]/g)?.length || 0)) +
            'HQ31X02e',
            );
        const response = await axios.request({
            method: 'POST',
            url: 'https://ai.tu.qq.com/trpc.shadow_cv.ai_processor_cgi.AIProcessorCgi/Process',
            data: obj,
            headers: {
                'Content-Type': 'application/json',
                'Origin': 'https://h5.tu.qq.com',
                'Referer': 'https://h5.tu.qq.com/',
                'User-Agent':
                'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
                'x-sign-value': sign,
                'x-sign-version': 'v1',
            },
            timeout: 30000,
        })
        if (!response.data) {
            throw 'No data'
        }
        if (response.data.msg === 'VOLUMN_LIMIT') {
            throw 'QQ rate limit caught'
        }
        if (response.data.msg === 'IMG_ILLEGAL') {
            throw 'Couldn\'t pass the censorship. Try another photo.'
        }
        if (response.data.code === 1001) {
            throw 'Face not found. Try another photo.'
        }
        if (response.data.code === -2100) { // request image is invalid
            throw 'Try another photo.'
        }
        if (response.data.code === 2119 || /* user_ip_country | service upgrading */ response.data.code === -2111 /* AUTH_FAILED */) {
            throw `Blocked ${JSON.stringify(response.data)}`
        }
        if (!response.data.extra) {
            throw 'Got no data from QQ: ' + JSON.stringify(response.data)
        }
        return JSON.parse(response.data.extra)

    } catch (err) {
        throw err
    }
}