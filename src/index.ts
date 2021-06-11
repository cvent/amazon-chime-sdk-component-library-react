// Copyright 2020-2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

export {default as Dislike} from './components/ui/icons/Dislike';
export {default as Like} from './components/ui/icons/Like';

// Constants
export { KEY_CODES } from './constants';

// Contexts
export {
  ControlBarContext,
  useControlBarContext,
} from './components/ui/ControlBar/ControlBarContext';
export {
  ModalContext,
  useModalContext,
} from './components/ui/Modal/ModalContext';
export {
  useNotificationState,
  useNotificationDispatch,
} from './providers/NotificationProvider';
export { AudioVideoContext } from './providers/AudioVideoProvider';

// Hooks
export { useClickOutside } from './hooks/useClickOutside';
export { useTabOutside } from './hooks/useTabOutside';
export { useUniqueId } from './hooks/useUniqueId';
export { useFocusIn } from './hooks/useFocusIn';
export { useMouseMove } from './hooks/useMouseMove';
export { useApplyVideoObjectFit } from './hooks/useApplyVideoObjectFit';
export { useElementAspectRatio } from './hooks/useElementAspectRatio';

export { useMeetingManager } from './providers/MeetingProvider';
export { useAudioVideo } from './providers/AudioVideoProvider';
export { useRosterState } from './providers/RosterProvider';
export { useRemoteVideoTileState } from './providers/RemoteVideoTileProvider';
export { useFeaturedTileState } from './providers/FeaturedVideoTileProvider';
export {
  useAudioInputs,
  useVideoInputs,
  useAudioOutputs,
} from './providers/DevicesProvider';
export { useLocalAudioOutput } from './providers/LocalAudioOutputProvider';
export { useLocalVideo } from './providers/LocalVideoProvider';
export {
  useContentShareState,
  useContentShareControls,
} from './providers/ContentShareProvider';

// SDK Hooks
export { useAttendeeStatus } from './hooks/sdk/useAttendeeStatus';
export { useAttendeeAudioStatus } from './hooks/sdk/useAttendeeAudioStatus';
export { useSelectVideoQuality } from './hooks/sdk/useSelectVideoQuality';
export { useSelectVideoInputDevice } from './hooks/sdk/useSelectVideoInputDevice';
export { useSelectAudioInputDevice } from './hooks/sdk/useSelectAudioInputDevice';
export { useSelectAudioOutputDevice } from './hooks/sdk/useSelectAudioOutputDevice';
export { useActiveSpeakersState } from './hooks/sdk/useActiveSpeakersState';
export { useToggleLocalMute } from './hooks/sdk/useToggleLocalMute';
export { useMeetingStatus } from './hooks/sdk/useMeetingStatus';
export { useLocalAudioInputActivity } from './hooks/sdk/useLocalAudioInputActivity';
export { useLocalAudioInputActivityPreview } from './hooks/sdk/useLocalAudioInputActivityPreview';
export { useBandwidthMetrics } from './hooks/sdk/useBandwidthMetrics';
export { useDevicePermissionStatus } from './hooks/sdk/useDevicePermissionStatus';
export { useMediaStreamMetrics } from './hooks/sdk/useMediaStreamMetrics';

// Providers
export { NotificationProvider } from './providers/NotificationProvider';
export { MeetingProvider } from './providers/MeetingProvider';
export { LocalAudioOutputProvider } from './providers/LocalAudioOutputProvider';
export { LocalVideoProvider } from './providers/LocalVideoProvider';
export { ContentShareProvider } from './providers/ContentShareProvider';
export { AudioVideoProvider } from './providers/AudioVideoProvider';
export { RosterProvider } from './providers/RosterProvider';
export { DevicesProvider } from './providers/DevicesProvider';
export { RemoteVideoTileProvider } from './providers/RemoteVideoTileProvider';
export { FeaturedVideoTileProvider } from './providers/FeaturedVideoTileProvider';
export {
  UserActivityProvider,
  useUserActivityState,
} from './providers/UserActivityProvider';

// Types
export { VideoQuality } from './hooks/sdk/useSelectVideoQuality';

// enums
export {
  MeetingStatus,
  DevicePermissionStatus,
  DeviceLabels,
  DeviceLabelTrigger,
} from './types/index';
export { Severity, ActionType } from './providers/NotificationProvider';

// Class
export { MeetingManager } from './providers/MeetingProvider/MeetingManager';

// Interface
export { NotificationType, Action } from './providers/NotificationProvider';

// Utilities
export { Versioning } from './versioning/Versioning';
