import React from 'react'

function PayErrorsSummary({ errors, touched }) {
  return errors.length !== 0 ? (
    <div className="border border-dashed px-8 py-1">
      <h2 className="text-red-600">errors summary</h2>
      <ul className="list-disc list-inside">
        {Object.keys(touched).map(
          (curErrorName) =>
            errors[curErrorName] && (
              <li key={curErrorName}>{errors[curErrorName]}</li>
            )
        )}
      </ul>
    </div>
  ) : null
}

export default PayErrorsSummary
