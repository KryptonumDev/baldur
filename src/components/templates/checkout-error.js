import ButtonFilled from '@/components/atoms/button-filled'

export default function Error({ data }) {
  return (
    <div className='container'>
      <svg className='background error' xmlns="http://www.w3.org/2000/svg" width="653" height="709" fill="none" viewBox="0 0 653 709"><path fill="rgba(204, 196, 196, 0.15)" d="m315.124 120.936-48.119 27.346a611.276 611.276 0 0 0-7.057-9.946c-2.215-3.024-4.45-6.036-6.684-9.038l-3.496 1.885-8.756 4.788-24.669 13.403-7.408 3.996-5.131 2.797c.573.765 1.168 1.539 1.752 2.303a654.779 654.779 0 0 1 6.25 8.303 616.905 616.905 0 0 1 6.606 9.118l-42.674 24.259-10.253 5.825a46.664 46.664 0 0 1-3.085 1.755l-.251.159c-24.626 13.283-52.557 14.522-76.963 5.691a93.516 93.516 0 0 1-26.64-14.804 236.091 236.091 0 0 0 24.887 19.637 247.361 247.361 0 0 0 10.513 6.85c29.597 17.235 61.138 28.395 93.128 33.817.128.021.246.043.374.053 10.66 1.646 21.41 2.607 32.221 2.813.013-.097.004-.202.007-.297.623-15.192 4.855-30.091 12.484-43.23a66.558 66.558 0 0 1 1.585-2.599l.035.039a82.77 82.77 0 0 1 5.806-8.373c.36.498.667 1 1.008 1.521a696.009 696.009 0 0 1 26.11 45.285c.545 1.053 1.096 2.053 1.607 3.087.557 1.073 1.123 2.124 1.659 3.199a735.612 735.612 0 0 1 4.907 9.655.216.216 0 0 0 .015.051c19.621 39.499 35.475 80.82 47.051 122.921 2.989 10.717 5.131 22.396 7.466 34.724.642 3.423 1.291 6.93 1.974 10.466l13.325 11.038s-.26-22.295.106-22.094c.346.203 28.082 28.921 29.905 30.826.034.029.057.048.069.068l.034.029-23.055-66.406 32.274 25.538c-2.5-13.402-4.887-26.096-8.422-38.976-5.275-19.139-11.37-38.091-18.23-56.85a575.666 575.666 0 0 1-2.337-6.302c-8.678-23.075-18.488-45.79-29.425-67.953a985.044 985.044 0 0 0-3.407-6.823c-11.164-22.102-23.444-43.654-36.702-64.529-.049-.081-.072-.1-.134-.211.329-.113.754-.212 1.095-.305 34.492-10.417 72.152-.014 96.371 26.636.372.402.747.825 1.088 1.229a90.604 90.604 0 0 1 7.907 10.36 82.255 82.255 0 0 1 3.193 5.192c13.526 23.76 15.526 50.939 7.833 75.067l1.712.478 19.39 5.328 21.619 5.919 17.771 4.927a245.3 245.3 0 0 0 19.748-66.93 279.556 279.556 0 0 0 1.782-14.742c.281-3.767.543-7.616.695-11.393.296-7.415.273-14.845-.14-22.263-.829-16.96-3.491-33.975-7.969-50.719a242.438 242.438 0 0 0-5.182-16.936 245.4 245.4 0 0 0-14.625-33.763c-.511-.907-.947-1.8-1.459-2.708-.855-1.597-1.752-3.18-2.64-4.785a239.946 239.946 0 0 0-21.607-31.832l-116.842 66.426ZM346.272 463.635l-26.711-4.765-24.075 11.576 25.263-4.985 16.176 2.843 9.347-4.669ZM364.962 474.721l-19.725 12.377-14.792 16.649 29.867-9.249 4.65-19.777ZM404.432 421.178l32.286 2.585 7.53-15.033-10.776 9.961-29.04 2.487Z"/><path fill="rgba(204, 196, 196, 0.15)" d="m396.776 412.794 4.156-7.756-3.381-11.34-6.59 10.079 5.815 9.017ZM397.359 449.334c8.654 8.71 17.693 17.98 21.905 23.085l.002.032 5.169 5.424-41.493-14.303c.677 1.115 2.075 3.734 3.544 6.695l.002.021 7.11 13.41-18.682-5.209-1.44-.395c.19.248.369.487.561.745l89.111 81.503s29.292 18.488 31.087 19.444c.033.019.055.027.067.037l.001.011 98.989 42.28c3.17-9.648 5.271-19.808 6.218-30.356.777-8.714.716-17.325-.111-25.754l-84.869-39.229-30.622-19.083-70.316-68.797c-.011 0-.012-.01-.012-.01l-35.687-10.086 19.466 20.535Z"/></svg>
      <div className='content'>
        <h1 className='anim'>PŁATNOŚĆ NIEUDANA</h1>
        <p className='text anim'>
          ZAMÓWIENIE NR: <strong>{`123123`}</strong><br />
            NIESTETY PŁATNOŚĆ NIEUDANA, prosimy spróbuj ponownie.
        </p>
        <ButtonFilled href='/' className='anim'>
          POWRÓT DO KOSZYKA
        </ButtonFilled>
      </div>
    </div>
  )
}