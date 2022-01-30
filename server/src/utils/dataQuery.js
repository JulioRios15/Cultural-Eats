function encodeQueryData(params){
    const encodedQueryParams = Object.keys(params).map((key) => {
        return [key, params[key]].map(encodeURIComponent).join('=');
      }).join("&");

      return encodedQueryParams;
}

module.exports = { encodeQueryData }