'use strict'

angular.module('toopyo').component('confirmDeleteModal', {
  templateUrl: 'confirm-delete.modal.template.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this

    $ctrl.$onInit = function () {
      // console.log('confirmDeleteModal component', this)
      $ctrl.item = $ctrl.resolve.item
      $ctrl.description = $ctrl.resolve.description
      // $ctrl.selected = {
      //   item: $ctrl.items[0]
      // }
    }

    $ctrl.ok = function () {
      $ctrl.close({$value: true})
    }

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: false})
    }
  }
})
