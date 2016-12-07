'use strict'

angular.module('toopyo').factory('Modal', function ($uibModal, $log) {
  return {
    confirmDelete: function (item, description) {
      return $uibModal.open({
        component: 'confirmDeleteModal',
        size: 'sm',
        resolve: {
          item: function () {
            return item
          },
          description: function () {
            return description
          }
        }
      })
    }
  }
})
