<!DOCTYPE html>
<html>
<body>
  <button class="increase">+</button>
  <span class="counter">0</span>

  <script>
    카운트 상태를 유지하기 위한 전역 변수
    let num = 0;

    const $counter = document.querySelector('.counter');

    const increase = function () {
      $counter.textContent = ++num; // 상태 변화
    };

    document.querySelector('.increase').onclick = increase;
  </script>
</body>
</html>