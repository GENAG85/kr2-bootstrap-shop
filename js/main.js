// Небольшая логика поверх Bootstrap-компонентов.
// Bootstrap сам отвечает за открытие/закрытие modal через data-bs-* атрибуты.

const productButtons = document.querySelectorAll('[data-product-name]');
const selectedProductField = document.getElementById('modal-product');
const selectedProductText = document.getElementById('modal-product-name');

productButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const productName = button.dataset.productName;

    if (selectedProductField) {
      selectedProductField.value = productName;
    }

    if (selectedProductText) {
      selectedProductText.textContent = productName;
    }
  });
});

const modalForm = document.getElementById('quick-order-form');
const modalSuccess = document.getElementById('modal-success');

if (modalForm && modalSuccess) {
  modalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!modalForm.checkValidity()) {
      modalForm.classList.add('was-validated');
      return;
    }

    modalSuccess.classList.remove('d-none');
    modalForm.reset();
    modalForm.classList.remove('was-validated');
  });
}
