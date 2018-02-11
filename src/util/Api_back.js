/**
 * Created by Rookie on 2017/7/20.
 */
export default  class Api {


    static Get(url, param, success, fail) {

        if (param) {

            var keys = Object.keys(param);

            var totalParamString = '';

            keys.forEach((key, i) => {

                var string;
                if (i === 0) {
                    string = '?';
                }
                else if (i > 0) {

                    string = '&';
                }

                var value = param[key];

                totalParamString += string;

                totalParamString = totalParamString + key + '=' + value;

            })

            url = url + totalParamString;
        }

        console.log('url=' + url);


        fetch(url,
            {
                headers: {
                    'appkey': 'ef1fc57c13007e33',
                }
            })
            .then(res => res.json())
            .then(resData => {
                if (success) {
                    success(resData);
                }
            }).catch(error => {
            if (fail) {
                fail(error);
            }
        })
    }
}