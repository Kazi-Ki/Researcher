　　let currentOpen = null;

    function toggleContent(department) {
      const target = document.getElementById(department);

      // すでに開いているのをクリックしたら閉じる
      if (currentOpen === department) {
        closeAll();
        currentOpen = null;
        return;
      }

      // すべて閉じてから新しく開く
      closeAll();

      setTimeout(() => {
        target.style.display = 'block';
        const height = target.scrollHeight + 'px';
        target.style.height = '0';
        setTimeout(() => {
          target.style.opacity = 1;
          target.style.height = height;
        }, 10);

        setTimeout(() => {
          target.style.height = 'auto';
        }, 510);

        currentOpen = department;
      }, 500); // 閉じ終わってから開くまでの待機
    }

    function closeAll() {
      const contents = document.querySelectorAll('.content-container');
      contents.forEach(item => {
        item.style.opacity = 0;
        item.style.height = '0';
        setTimeout(() => {
          item.style.display = 'none';
        }, 500);
      });
    }

  // 活動記録の各項目にクリックイベントを追加
  document.querySelectorAll('.activity-item').forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
      }
    });
  });

  // モーダルの閉じるボタンにクリックイベントを追加
  document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      closeBtn.closest('.modal').style.display = 'none';
    });
  });

  // モーダルの外側をクリックしたらモーダルを閉じる
  window.addEventListener('click', event => {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

