angular.module('angularTimeago', [])
    .directive('angularTimeago', function() {
        return {
            template: '<span>{{timeagoWords}}</span>',
            link: function($scope, $element, $attrs) {
                $attrs.$observe('angularTimeago', function() {
                    $scope.timeagoWords = transformIntoWords($attrs.angularTimeago);
                })
            }
        };

        /**
         * @description Parse a ISO8601 format date into a Javascript Date object.
         * @param {String} ISO8601 format date, e.g.: 2015-01-29T09:35:56Z
         */
        function parse(time) {
            var s = time.replace(/^\s*|\s*$/g, '');

            s = s.replace(/\.\d+/, '');
            s = s.replace(/-/, '/').replace(/-/, '/');
            s = s.replace(/T/, ' ').replace(/Z/, ' UTC');
            s = s.replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2');
            s = s.replace(/([\+\-]\d\d)$/, ' $100');

            return new Date(s);
        }

        /**
         * @description Calculate the time distance then transform into wrods.
         * @param {Date} Javascript date object, `new Date()`.
         * @return {String} Distance in words, e.g.: '4 months'.
         */
        function transformIntoWords(date) {
            var distance = new Date().getTime() - parse(date).getTime(),
                seconds = Math.abs(distance) / 1000,
                minutes = seconds / 60,
                hours = minutes / 60,
                days = hours / 24,
                years = days / 365,
                strings = {
                    suffix: ' ago',
                    seconds: 'a minute',
                    minute: 'a minute',
                    minutes: '%d minutes',
                    hour: 'an hour',
                    hours: '%d hours',
                    day: 'a day',
                    days: '%d days',
                    month: 'a month',
                    months: '%d months',
                    year: 'a year',
                    years: '%d years'
                };

            function substitute(template, number) {
                return template.replace(/%d/i, number) + strings.suffix;
            }

            var words =
                seconds < 45 && substitute(strings.seconds, Math.round(seconds)) ||
                seconds < 90 && substitute(strings.minute, 1) ||
                minutes < 45 && substitute(strings.minutes, Math.round(minutes)) ||
                minutes < 90 && substitute(strings.hour, 1) ||
                hours < 24 && substitute(strings.hours, Math.round(hours)) ||
                hours < 42 && substitute(strings.day, 1) ||
                days < 30 && substitute(strings.days, Math.round(days)) ||
                days < 45 && substitute(strings.month, 1) ||
                days < 365 && substitute(strings.months, Math.round(days / 30)) ||
                years < 1.5 && substitute(strings.year, 1) ||
                substitute(strings.years, Math.round(years));

            return words;
        }

    });