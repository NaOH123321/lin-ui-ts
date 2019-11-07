interface Lin {
  renderWaterFlow(
    data: Array<any>,
    refresh?: boolean,
    success?: GeneralCallback
  ): void;

  showDialog(options?: DialogOption): void; //??源码有返回this

  showActionSheet(options?: ActionSheetOption): void; //??源码有返回this

  showToast(options?: ToastOption): void; //??源码有返回this
  hideMessage(): void;

  showStatusShow(options?: StatusShowOption): void;
  hideStatusShow(): void;

  showPopup(options?: PopupOption): void;
  hidePopup(): void;

  showMessage(options?: MessageOption): void;
  hideMessage(): void;

  showLoadmore(options?: LoadmoreOption): void;
  hideLoadmore(): void;

  showLoading(options?: LoadingOption): void;
  hideLoading(): void;
}

/***************************************************************************
 * 通用回调函数
 */
type GeneralCallback = () => void;

/***************************************************************************
 * Dialog
 */
interface DialogOption {
  type?: DialogType;
  title?: string;
  showTitle?: boolean;
  locked?: boolean;
  content?: string;
  contentColor?: string;
  confirmText?: string;
  confirmColor?: string;
  cancelColor?: string;
  cancelText?: string;
  success?: DialogSuccessCallback;
  fail?: GeneralCallback;
}

interface DialogSuccessCallbackResult {
  confirm: boolean;
  cancel: Boolean;
  errMsg: 'showDialog: success';
}

type DialogType = 'alert' | 'confirm';
type DialogSuccessCallback = (res: DialogSuccessCallbackResult) => void;

/***************************************************************************
 * ActionSheet
 */
interface ActionSheetOption {
  itemList: ActionSheetItem[];
  success?: ActionSheetSuccessCallback;
  fail?: ActionSheetFailCallback;
  title?: string;
  locked?: boolean;
  cancelText?: string;
  showCancel?: boolean;
}

interface ActionSheetItem {
  name: string;
  icon?: string;
  iconSize?: string;
  iconColor?: string;
  image?: string;
  imageStyle?: string;
  color?: string;
  openType?: string;
}

interface ActionSheetSuccessCallbackResult {
  index: number;
  item: ActionSheetItem;
}

interface ActionSheetFailCallbackResult {
  errMsg: 'showactionsheet:fail cancel';
}

type ActionSheetSuccessCallback = (
  res: ActionSheetSuccessCallbackResult
) => void;
type ActionSheetFailCallback = (res: ActionSheetFailCallbackResult) => void;

/***************************************************************************
 * Toast
 **/
interface ToastOption {
  title?: string;
  icon?: ToastIcon;
  iconSize?: string;
  iconColor?: string;
  image?: string;
  placement?: ToastPlacement;
  duration?: number;
  center?: boolean;
  mask?: boolean;
  success?: GeneralCallback;
  complete?: GeneralCallback;
  offsetX?: number;
  offsetY?: number;
}

type ToastIcon = 'success' | 'loading' | 'error ' | string;
type ToastPlacement = 'top' | 'left' | 'right' | 'bottom';

/***************************************************************************
 * StatusShow
 **/
interface StatusShowOption {
  type?: StatusShowType;
  image?: string;
  describe?: string;
  buttonText?: string;
  bgColor?: string;
  fullScreen?: boolean;
}

type StatusShowType =
  | 'success'
  | 'error'
  | 'network'
  | 'cart'
  | 'order'
  | 'address'
  | 'data'
  | 'product';

/***************************************************************************
 * Popup
 **/
interface PopupOption {
  zIndex?: number;
  animation?: PopupAnimation;
  contentAlign?: PopupContentAlign;
  locked?: boolean;
}

type PopupAnimation = 'show' | 'hide';
type PopupContentAlign = 'top' | 'left' | 'right' | 'bottom' | 'center';

/***************************************************************************
 * Message
 **/
interface MessageOption {
  content?: string;
  icon?: string;
  image?: string;
  type?: MessageType;
  duration?: number;
  success?: GeneralCallback;
}

type MessageType = 'primary' | 'warning' | 'success' | 'error';

/***************************************************************************
 * Loadmore
 **/
interface LoadmoreOption {
  custom?: boolean;
  line?: boolean;
  color?: string;
  size?: string;
  type?: LoadmoreType;
  endText?: string;
  loadingText?: string;
}

type LoadmoreType = 'end' | 'loading';

/***************************************************************************
 * Loading
 **/
interface LoadingOption {
  custom?: boolean;
  fullScreen?: boolean;
  color?: string;
  type?: LoadingType;
  size?: LoadingSize;
  opacity?: number;
}

type LoadingType = 'falsh' | 'flip' | 'change' | 'rotate' | 'circle';
type LoadingSize = 'mini' | 'medium' | 'large';
