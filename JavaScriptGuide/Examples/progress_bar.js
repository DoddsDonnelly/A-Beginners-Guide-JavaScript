var qform = document.getElementById("qform"),
    qs = [document.getElementById("q1"), document.getElementById("q2"), document.getElementById("q3")],
    ans = [4, 2550, 4958],
    meter = document.getElementById("meter"),
    progress = document.getElementById("progress");
qform.addEventListener("submit", function(event) {
        var num_correct = 0,
            num_questions = qs.length,
            meter_HTML = "";
            progress_HTML = "",
            score = 0;
        event.preventDefault();
        for (var i = 0; i < num_questions; i++) {
            if (+qs[i].value === ans[i]) {
                num_correct += 1;
            }
        }
        meter_HTML = '<p>Meter Example</p><meter min="0" max="' + num_questions + '" ';
        meter_HTML += 'value="' + num_correct + '">';
        meter_HTML += num_correct + '</meter>   ';
        meter_HTML += num_correct + '/3 Correct';
        meter.innerHTML = meter_HTML;

        score = Math.round(num_correct / num_questions * 100);
        progress_HTML = '<p>Progress Example</p><progress max="100" ';
        progress_HTML += 'value="' + score + '">';
        progress_HTML += score + '%</progress>';
        progress_HTML += '   Grade: ' + score + '%';
        progress.innerHTML = progress_HTML;
    },
    false);