import Service from '@ember/service';

export default class ConversionServiceService extends Service {

  dateToNiceDate(date) {
    let result = new Date(date);
        result = result.toLocaleString();
        result = result.replace(/ /, " at ");
        result = result.replace(/:\d\d$/, "");
    return result;
  }

  valutaToNiceValuta(number) {
    return `€ ${number}`;
  }

  escapedstringToHTML(string) {
    return string.replace(/\\n/, "<br />");
  }
}
