/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/**
 * skenario test
 *
 * - asyncGetLeaderboards thunk
 *  - should dispatch showLoading, getLeaderBoardsSuccessActionCreator and hideLoading on success
 *  - should dispatch showLoading, getLeaderboardsFailureActionCreator and hideLoading on failure
 */
import {
  describe, it, expect, vi, beforeEach, afterEach,
} from 'vitest';
import axios from 'axios';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncGetLeaderboards, getLeaderboardsFailureActionCreator, getLeaderBoardsSuccessActionCreator } from './action';

vi.mock('axios');

describe('asyncGetLeaderboards Thunk', () => {
  beforeEach(() => {
    axios._get = axios.get;
    vi.clearAllMocks();
  });

  afterEach(() => {
    axios.get = axios._get;
    delete axios._get;
    vi.restoreAllMocks();
  });

  it('should dispatch showLoading, getAllThreadsSuccessActionCreator and hideLoading on success', async () => {
    const dispatch = vi.fn();
    const leaderboardsData = [
      {
        user: {
          id: 'users-1',
          name: 'John Doe',
          email: 'john@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 10,
      },
      {
        user: {
          id: 'users-2',
          name: 'Jane Doe',
          email: 'jane@example.com',
          avatar: 'https://generated-image-url.jpg',
        },
        score: 5,
      },
    ];
    axios.get.mockResolvedValue({
      data: {
        data: {
          leaderboards: leaderboardsData,
        },
      },
    });

    await asyncGetLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getLeaderBoardsSuccessActionCreator(leaderboardsData));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch showLoading, getLeaderboardsFailureActionCreator and hideLoading on failure', async () => {
    const dispatch = vi.fn();
    window.alert = vi.fn();
    const errorMessage = 'Error fetching threads';
    axios.get.mockRejectedValue({ response: { data: { message: errorMessage } } });

    await asyncGetLeaderboards()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(getLeaderboardsFailureActionCreator(errorMessage));
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});
