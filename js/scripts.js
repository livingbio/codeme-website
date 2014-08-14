var callback = function(){
    $('.item-skills').each(function(){
        newWidth = $(this).parent().width() * $(this).data('percent');
        $(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
    });
    $('.icons-red').each(function(){
        height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
    });
};
$(document).ready(callback);

var resize;
window.onresize = function() {
    clearTimeout(resize);
    resize = setTimeout(function(){
        callback();
    }, 100);
};

var radar = document.getElementById("radar").getContext("2d");
var radar_data = {
            labels: ["Team Work", "Coding", "PR", "Academic", "Testing", "Innovation", "Project Management"],
            datasets: [
            // {
            //     label: "My First dataset",
            //     fillColor: "rgba(220,220,220,0.2)",
            //     strokeColor: "rgba(220,220,220,1)",
            //     pointColor: "rgba(220,220,220,1)",
            //     pointStrokeColor: "#fff",
            //     pointHighlightFill: "#fff",
            //     pointHighlightStroke: "rgba(220,220,220,1)",
            //     data: [65, 59, 90, 81, 56, 55, 40]
            // },
            {
                label: "My Second dataset",
                fillColor: "rgba(151,187,205,0.2)",
                strokeColor: "rgba(151,187,205,1)",
                pointColor: "rgba(151,187,205,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
            ]
        };

        var myRadarChart = new Chart(radar).Radar(radar_data, radar_option);
