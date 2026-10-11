/**
 * Japanese dictionaries for every locale namespace DSH registers, typed
 * against each namespace's shipped key union — key drift is a compile
 * error. Placeholders ({name}) are preserved verbatim.
 */
import type { LocaleDictOf } from "@deepseek-ai/dsh-client-ui-slots";
// common, settings.locale
import type {} from "@deepseek-ai/dsh-client-locale/client";
// settings.agentPreset
import type {} from "@deepseek-ai/dsh-client-ui-agent-preset/client";
// approval
import type {} from "@deepseek-ai/dsh-client-ui-approval/client";
// chat
import type {} from "@deepseek-ai/dsh-client-ui-chat/client";
// command
import type {} from "@deepseek-ai/dsh-client-ui-commands/client";
// conversation
import type {} from "@deepseek-ai/dsh-client-ui-conversation/client";
// cordis
import type {} from "@deepseek-ai/dsh-client-ui-cordis/client";
// deliverables
import type {} from "@deepseek-ai/dsh-client-ui-deliverables/client";
// goal
import type {} from "@deepseek-ai/dsh-client-ui-goal/client";
// slash.menu
import type {} from "@deepseek-ai/dsh-client-ui-input-trigger/client";
// job
import type {} from "@deepseek-ai/dsh-client-ui-jobs/client";
// feedback
import type {} from "@deepseek-ai/dsh-client-ui-message-feedback/client";
// model
import type {} from "@deepseek-ai/dsh-client-ui-model-selection/client";
// open-in-app
import type {} from "@deepseek-ai/dsh-client-ui-open-in-app/client";
// settings.permission
import type {} from "@deepseek-ai/dsh-client-ui-permission-presets/client";
// plan
import type {} from "@deepseek-ai/dsh-client-ui-plan/client";
// settings
import type {} from "@deepseek-ai/dsh-client-ui-settings-general/client";
// settings.models
import type {} from "@deepseek-ai/dsh-client-ui-settings-models/client";
// settings.pluginInventory
import type {} from "@deepseek-ai/dsh-client-ui-settings-plugin-inventory/client";
// settings.plugins
import type {} from "@deepseek-ai/dsh-client-ui-settings-plugins/client";
// sidebar
import type {} from "@deepseek-ai/dsh-client-ui-sidebar/client";
// sidebarDocumentPreview
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-documentpreview/client";
// sidebarFiles
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-files/client";
// sidebarRight
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-right/client";
// skill
import type {} from "@deepseek-ai/dsh-client-ui-skill/client";
// subagent
import type {} from "@deepseek-ai/dsh-client-ui-subagent/client";
// settings.theme
import type {} from "@deepseek-ai/dsh-client-ui-theme/client";
// question
import type {} from "@deepseek-ai/dsh-client-ui-user-questions/client";
// workflowRun
import type {} from "@deepseek-ai/dsh-client-ui-workflow-run/client";
// workspace
import type {} from "@deepseek-ai/dsh-client-ui-workspace/client";
// session-log-download
import type {} from "@deepseek-ai/dsh-session-log-export/client";
import type {} from "@deepseek-ai/dsh-client-ui-trajectory/client";
import type {} from "@deepseek-ai/dsh-client-ui-plugin-manager/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings-account/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings-agent-loop/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings-session-log/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings-shell/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings-subagent/client";
import type {} from "@deepseek-ai/dsh-client-ui-settings-web-search/client";
import type {} from "@deepseek-ai/dsh-client-ui-shortcuts/client";
import type {} from "@deepseek-ai/dsh-client-ui-layout/client";
import type {} from "@deepseek-ai/dsh-client-ui-sidebar-browser/client";

// The namespaces below ship no key union through their `exports`; each key
// set is copied from the named package, and `pnpm drift` is the only check
// that sees their upstream drift.
/** Keys of @deepseek-ai/dsh-client-ui-trajectory@0.2.0-rc.2 (union lives in a declaration the package's `exports` never exposes). */
type TrajectoryKey =
  | "view.trajectory"
  | "toolbar.aria"
  | "toolbar.duration"
  | "toolbar.useActualDuration"
  | "toolbar.useEqualWidth"
  | "toolbar.actualTime"
  | "toolbar.turns"
  | "toolbar.expandTurns"
  | "toolbar.collapseTurns"
  | "toolbar.calls"
  | "toolbar.expandCalls"
  | "toolbar.collapseCalls"
  | "toolbar.search"
  | "toolbar.searchPlaceholder"
  | "kind.system"
  | "kind.user"
  | "kind.context"
  | "kind.compacted"
  | "kind.message"
  | "kind.assistant"
  | "kind.tool"
  | "kind.subtool"
  | "kind.sub"
  | "column.input"
  | "column.output"
  | "column.think"
  | "column.time"
  | "column.model"
  | "column.tools"
  | "turn.label"
  | "section.betweenTurns"
  | "group.message"
  | "group.step"
  | "group.compaction"
  | "status.failed"
  | "status.pending"
  | "status.completed"
  | "timing.notAvailable"
  | "timing.notRecorded"
  | "timing.stepStartUnavailable"
  | "timing.firstTokenUnavailable"
  | "timing.usageUnavailable"
  | "timing.outputTokensUnavailable"
  | "timing.durationTooShort"
  | "timing.showLocalTime"
  | "timing.showUnixTimestamp"
  | "timing.started"
  | "timing.totalDuration"
  | "timing.ttft"
  | "timing.generation"
  | "timing.throughput"
  | "timing.duration"
  | "timing.source"
  | "timing.sessionTimestamps"
  | "timing.sessionTimestampsRunning"
  | "timing.request"
  | "unit.milliseconds"
  | "unit.seconds"
  | "unit.tokens"
  | "unit.tokensPerSecond"
  | "usage.tokens"
  | "usage.reasoning"
  | "usage.content"
  | "usage.notReported"
  | "usage.input"
  | "usage.cached"
  | "usage.cacheCreated"
  | "usage.other"
  | "usage.output"
  | "usage.thisRequest"
  | "usage.sessionCumulative"
  | "options.notRecorded"
  | "options.json"
  | "source.unknown"
  | "source.user"
  | "source.plugin"
  | "source.pluginNamed"
  | "source.goal"
  | "source.goalRound"
  | "source.notRecorded"
  | "source.messageJson"
  | "tab.summary"
  | "tab.rawOutput"
  | "tab.preview"
  | "tab.raw"
  | "tab.source"
  | "tab.payload"
  | "tab.result"
  | "tab.schema"
  | "tab.timing"
  | "tab.diff"
  | "tab.systemPrompt"
  | "tab.tools"
  | "tab.options"
  | "tab.usage"
  | "record.toolCallOnly"
  | "record.noContent"
  | "record.noPayload"
  | "record.noResult"
  | "record.noOutput"
  | "record.schemaUnavailable"
  | "record.parameters"
  | "record.resultJson"
  | "record.json"
  | "record.parametersJson"
  | "record.namedParametersJson"
  | "record.payloadJson"
  | "record.outputJson"
  | "record.thinking"
  | "record.wrapLines"
  | "code.source"
  | "code.output"
  | "code.copySource"
  | "code.copyOutput"
  | "code.originalJson"
  | "code.running"
  | "record.systemPromptMissing"
  | "record.toolsMissing"
  | "record.systemPrompt"
  | "record.tools"
  | "block.openSummary"
  | "block.openSummaryTitle"
  | "block.label"
  | "history.loadingTrajectory"
  | "history.loadingEarlier"
  | "history.loadingEarlierAria"
  | "history.loadEarlier"
  | "history.clickToLoadEarlier"
  | "request.label"
  | "request.labelCompaction"
  | "request.compaction"
  | "request.compactionPurpose"
  | "request.retryProgress"
  | "request.collapsedSummary"
  | "request.collapsedTurn"
  | "request.collapsedAssistant"
  | "request.rowAria"
  | "request.rowPrefix"
  | "request.rowAriaCompaction"
  | "request.noContent"
  | "summary.toolCalls.one"
  | "summary.toolCalls.other"
  | "summary.steps.one"
  | "summary.steps.other"
  | "details.event"
  | "details.resize"
  | "details.resizeTitle"
  | "details.close"
  | "details.status"
  | "details.purpose"
  | "details.provider"
  | "details.model"
  | "details.toolCalls"
  | "details.subtoolCalls"
  | "details.error"
  | "details.failure.auth"
  | "details.retry"
  | "details.scheduled"
  | "details.retryDelay"
  | "details.result"
  | "details.compacted"
  | "details.assistantMessage"
  | "details.source"
  | "details.hierarchy"
  | "details.toolCall"
  | "timeline.aria"
  | "timeline.overviewAria"
  | "timeline.noTimingData"
  | "timeline.total"
  | "timeline.started"
  | "timeline.ttftDecoding"
  | "layout.compacting"
  | "layout.compactionFailed"
  | "layout.compacted"
  | "layout.toolCallOnly"
  | "attachment.list"
  | "attachment.imageName"
  | "layout.imageCount"
  | "layout.fileAttachments"
  | "layout.initialSystemPrompt"
  | "layout.systemPromptUpdated"
  | "layout.toolsUpdated"
  | "layout.toolAdded"
  | "layout.toolRemoved"
  | "layout.toolUpdateNotice"
  | "layout.toolsAdded"
  | "layout.toolsAddedCount"
  | "layout.toolsChanged"
  | "layout.toolsRemoved"
  | "layout.toolsRemovedCount"
  | "layout.systemPromptAndToolsUpdated"
  | "layout.compactionInterrupted";

/** Keys of @deepseek-ai/dsh-client-ui-directory-picker-browse@0.2.0-rc.2 (registers through the untyped overload, no namespace merge). */
type DirectoryBrowserKey =
  | "browser.title"
  | "browser.home"
  | "browser.newFolder"
  | "browser.folderName"
  | "browser.createIn"
  | "browser.untitledFolder"
  | "browser.create"
  | "browser.cancel"
  | "browser.open"
  | "browser.editPath"
  | "browser.loading"
  | "browser.truncated"
  | "browser.showHidden";

/** Keys of @deepseek-ai/dsh-client-ui-permission-presets@0.2.0-rc.2 (registers through the untyped overload). */
type PermissionAccessKey =
  | "mode"
  | "close"
  | "preset.readOnly"
  | "preset.workspaceWrite"
  | "preset.fullAccess"
  | "confirm.title"
  | "confirm.description"
  | "confirm.acknowledge"
  | "confirm.cancel"
  | "confirm.enable"
  | "auto.label"
  | "auto.badge"
  | "auto.description"
  | "auto.confirm.title"
  | "auto.confirm.description"
  | "auto.confirm.acknowledge"
  | "auto.confirm.enable";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type DocumentHtmlKey = "title" | "frame" | "loading" | "failed";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type DocumentMarkdownKey = "viewer.label" | "code.copy" | "code.copied" | "footnotes";

/** Keys of @deepseek-ai/dsh-client-ui-reference@0.2.0-rc.2 (registers through the untyped overload). */
type ReferenceKey =
  | "section.files"
  | "section.subagents"
  | "section.sessions"
  | "candidate.noCwd"
  | "crumb.root"
  | "time.now"
  | "time.minutes"
  | "time.hours"
  | "time.days"
  | "time.months"
  | "time.years";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarCodePreviewKey = "title" | "copy" | "copied";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarImageKey =
  | "zoomControls"
  | "zoomMenu"
  | "zoomOut"
  | "zoomIn"
  | "zoomFitWidth"
  | "zoomValue"
  | "title"
  | "preview"
  | "loading"
  | "failed"
  | "unsupported";

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarPdfKey =
  | "zoomControls"
  | "zoomMenu"
  | "zoomOut"
  | "zoomIn"
  | "zoomFitWidth"
  | "zoomValue"
  | "title"
  | "pageImage"
  | "loading"
  | "rendering"
  | "failed"
  | "password"
  | "workerFailed"
  | "unsupported"
  | "retry";

const approval: LocaleDictOf<"approval"> = {
  waiting: "承認待ち",
  "detail.aria": "承認の詳細",
  escalation: "ツール {toolName} が権限昇格を要求しています",
  reject: "拒否",
  allowOnce: "一度だけ許可",
};

const chat: LocaleDictOf<"chat"> = {
  "view.chat": "チャット",
  "number.groupSeparator": ",",
  "duration.compactSeconds": "{seconds}秒",
  "duration.compactMinutes": "{minutes}分{seconds}秒",
  "duration.milliseconds": "{milliseconds}ミリ秒",
  "stats.counts": "{turns} ターン {steps} ステップ",
  "stats.cacheHit": "ヒット率 {percent}%",
  "stats.dialog.title": "セッション統計",
  "stats.dialog.usageTitle": "トークン使用量",
  "stats.dialog.llmTime": "モデル所要時間",
  "stats.dialog.toolTime": "ツール呼び出し所要時間",
  "stats.dialog.ttft": "最初のトークンまでの平均時間（TTFT）",
  "stats.dialog.speed": "出力速度（TPS）",
  "chat.loadingHistory": "履歴を読み込み中",
  "chat.loadError": "履歴の読み込みに失敗しました：{message}（{code}）",
  "chat.loadOlder": "さらに前を読み込む",
  "chat.toBottom": "一番下へ",
  "chat.deepDiving": "深くへ潜航中...",
  "chat.turnNavigation.label": "ターンナビゲーション",
  "chat.turnNavigation.jump": "ターン {turn} へジャンプ",
  "chat.turnNavigation.jumpLoad": "ターン {turn} を読み込んでジャンプ",
  "chat.turnNavigation.turn": "ターン {turn}",
  "settings.transcript.title": "作業の詳細",
  "settings.transcript.description": "ツール呼び出しの詳細をどこまで表示するか選択します",
  "settings.transcript.compact": "コンパクト",
  "fileOpen.title": "ファイルを開けませんでした",
  "fileOpen.unknown": "このファイルを開けませんでした",
  "message.extraBlock": "追加ブロック",
  "message.systemPrompt": "システムプロンプト",
  "message.systemPromptUpdate": "システムプロンプトの更新",
  "message.contextInjection": "コンテキスト注入",
  "message.contextRecall": "セッション横断の再利用",
  "message.referenceSummary": "参照セッション · {labels}",
  "message.referenceSeparator": "、",
  "message.context.instructions.loaded": "読み込み済み",
  "message.context.instructions.added": "追加済み",
  "message.context.instructions.updated": "更新済み",
  "message.context.instructions.removed": "削除済み",
  "message.context.catalog.replaced": "カタログを差し替え",
  "message.context.catalog.more": "他{count}件",
  "message.context.snapshot.supersedes": "以前のスナップショットを置き換え",
  "message.context.relay.from": "セッション {session} から",
  "message.context.recall.counts": "{retained}件保持 · {omitted}件省略",
  "message.context.recall.truncated": "一部省略",
  "message.compaction": "コンテキストを圧縮しました",
  "message.compaction.running": "コンテキスト圧縮中",
  "message.compaction.completed": "{items} 件の会話を圧縮しました（約 {tokens} トークン）",
  "message.compaction.expand": "クリックして圧縮要約を表示",
  "message.compaction.unavailable": "圧縮要約は利用できません",
  "message.compaction.commandTitle": "compact",
  "message.think": "思考",
  "message.unknownSurface": "不明な surface イベント：{type}",
  "message.unknownBlock": "不明なコンテンツブロック",
  "message.turnProcess.toolCalls.one": "{count}回のツール呼び出し",
  "message.turnProcess.toolCalls.other": "{count}回のツール呼び出し",
  "message.turnProcess.messages.one": "{count}件のメッセージ",
  "message.turnProcess.messages.other": "{count}件のメッセージ",
  "message.turnProcess.subagents.one": "{count}個のサブエージェント",
  "message.turnProcess.subagents.other": "{count}個のサブエージェント",
  "message.turnProcess.thoughtForAWhile": "思考しました",
  "message.turnProcess.separator": " · ",
  "message.stopped": "停止しました",
  "message.branch": "新しい会話に分岐",
  "message.branchUnavailable": "完了したターンの最終メッセージからのみ分岐できます",
  "message.retry.active": "再試行中",
  "message.retry.cancelled": "再試行をキャンセルしました",
  "message.retry.started": "再試行",
  "message.retry.scheduled": "再試行を待機中",
  "message.retry.status": "{label}（{retry}/{maximum}）· {seconds}秒",
  "message.retry.delay": "待機時間：",
  "message.retry.failure": "失敗理由：",
  "message.failure.auth": "APIキーが無効です",
  "message.turnError": "このターンの実行に失敗しました",
  "message.maxTokens": "出力トークンが上限に達しました",
  "message.maxTokens.hint":
    "回答が途中で終了しました。これまでの出力はセッションに保持されています。「続けて」などと送信すると、セッションが続行します",
  "message.tokensPerSecond": "{tps}tok/s",
  "message.turnUsage.title": "このターンの使用量",
  "message.turnUsage.consumed": "使用量: {total}",
  "message.turnUsage.model": "提供元 / モデル",
  "message.turnUsage.cacheHit": "キャッシュヒット",
  "message.turnUsage.input": "未キャッシュ入力",
  "message.turnUsage.cacheRead": "キャッシュ読み取り",
  "message.turnUsage.cacheWrite": "キャッシュ書き込み",
  "message.turnUsage.output": "出力",
  "message.turnUsage.reasoning": "（うち推論 {tokens}）",
  "message.turnUsage.count": "{count} tok",
  "command.running": "実行中",
  "command.failed": "コマンド失敗",
  "command.done": "完了",
  "command.title": "コマンド",
  "row.running": "実行中",
  "row.failed": "失敗",
  "json.truncated": " 以下は省略（全{total}文字）",
  "clock.md": "{m}月{d}日",
  "clock.ymd": "{y}年{m}月{d}日",
  "message.stepProcess.thinking": "リクエストを分析中",
  "message.stepProcess.read": "ファイルを読み込み中",
  "message.stepProcess.readImage": "画像を読み込み中",
  "message.stepProcess.write": "ファイルを書き込み中",
  "message.stepProcess.search": "コードを検索中",
  "message.stepProcess.edit": "ファイルを編集中",
  "message.stepProcess.commands": "コマンドを実行中",
  "message.stepProcess.code": "コードを実行中",
  "message.stepProcess.webSearch": "ウェブを検索中",
  "message.stepProcess.webFetch": "ウェブページを取得中",
  "message.stepProcess.subagents": "サブエージェントを呼び出し中",
  "message.stepProcess.plan": "プランを更新中",
  "message.stepProcess.questions": "操作を待っています",
  "message.stepProcess.tools": "ツールを呼び出し中",
  "message.stepProcess.prepare.read": "ファイル読み込みを準備中",
  "message.stepProcess.prepare.readImage": "画像読み込みを準備中",
  "message.stepProcess.prepare.write": "ファイル書き込みを準備中",
  "message.stepProcess.prepare.search": "コード検索を準備中",
  "message.stepProcess.prepare.edit": "ファイル編集を準備中",
  "message.stepProcess.prepare.commands": "コマンド実行を準備中",
  "message.stepProcess.prepare.code": "コード実行を準備中",
  "message.stepProcess.prepare.webSearch": "ウェブ検索を準備中",
  "message.stepProcess.prepare.webFetch": "ウェブページ取得を準備中",
  "message.stepProcess.prepare.subagents": "サブエージェントの呼び出しを待機中",
  "message.stepProcess.prepare.plan": "プランの更新を準備中",
  "message.stepProcess.prepare.questions": "質問を準備中",
  "message.stepProcess.prepare.tools": "ツール呼び出しを準備中",
  "message.stepProcess.done.thinking": "分析完了",
  "message.stepProcess.done.read": "ファイルを読み込み",
  "message.stepProcess.done.readImage": "画像を読み込み",
  "message.stepProcess.done.write": "ファイルを書き込み",
  "message.stepProcess.done.search": "コードを検索",
  "message.stepProcess.done.edit": "ファイルを編集",
  "message.stepProcess.done.commands": "コマンドを実行",
  "message.stepProcess.done.code": "コードを実行",
  "message.stepProcess.done.webSearch": "ウェブを検索",
  "message.stepProcess.done.webFetch": "ウェブページを取得",
  "message.stepProcess.done.subagents": "サブエージェント呼び出し",
  "message.stepProcess.done.plan": "プランを更新",
  "message.stepProcess.done.questions": "質問",
  "message.stepProcess.done.tools": "ツールを仕様",
  "message.stepProcess.joinTwo": "「{first}」と「{second}」を行いました",
  "message.stepProcess.comma": "、",
  "message.stepProcess.sharedPrefix": "",
  "message.stepProcess.more": "{title}など",
  "message.trigger.request": "実行リクエストを受信",
  "message.trigger.goal": "ゴールを継続",
  "message.trigger.agent": "タスクメッセージを受信",
  "message.trigger.team": "チームメッセージを受信",
  "message.trigger.subagent": "サブタスクの状態が更新されました",
  "message.trigger.github": "GitHub イベントを受信",
  "message.trigger.webhook": "外部イベントを受信",
  "message.trigger.schedule": "自動実行タスク",
  "message.trigger.job": "バックグラウンドタスクが更新されました",
  "message.trigger.plugin": "プラグインの状態が更新されました",
  "message.trigger.explanation": "この通知をきっかけに応答しました。",
  "message.turnProcess.worked": "完了",
  "message.turnProcess.took": "完了までの時間：",
  "message.turnProcess.failed": "失敗",
  "image.open": "画像全体を表示",
  "image.loading": "画像を読み込み中…",
  "image.failed": "画像プレビューを利用できません",
  "image.dialog": "画像プレビュー",
  "image.close": "画像プレビューを閉じる",
  "chat.deepDivingFor": "深くへ潜航中({duration}）···",
  "settings.performance.title": "パフォーマンスと使用量",
  "settings.performance.description": "パフォーマンスと使用量の表示範囲を選択します",
  "settings.performance.compact": "簡潔",
  "settings.performance.detailed": "詳細",
  "settings.links.title": "チャットのリンクを開く場所",
  "settings.links.description": "ウェブリンクを開く場所を選択します",
  "settings.links.sidebar": "アプリ内サイドバー",
  "settings.links.newTab": "既定のブラウザー",
  "settings.transcript.standard": "標準",
  "settings.transcript.detailed": "詳細",
  "settings.transcript.verbose": "すべて表示",
  "message.toolAdded": "ツールを追加：{name}",
  "message.toolRemoved": "ツールを削除：{name}",
  "message.toolsAdded": "追加：{names}",
  "message.toolsAddedCount": "{count}件追加",
  "message.toolsChanged": "{added}件追加、{removed}件削除",
  "message.toolsRemoved": "削除：{names}",
  "message.toolsRemovedCount": "{count}件削除",
  "message.toolsUpdated": "ツールが更新されました",
  "message.accountStopped": "タスクを停止しました",
  "message.failure.accountSignedOut": "DeepSeek からサインアウトしたため停止しました。",
  "message.failure.accountSignInRequired":
    "DeepSeek にサインインし、リクエストの送信先がアカウント認証に対応していることを確認してください。",
  "message.failure.quota": "リクエストの上限に達しました。",
  "duration.secondUnit": "秒",
  "duration.minuteUnit": "分",
  "duration.hourUnit": "時間",
};

const command: LocaleDictOf<"command"> = {
  "description.compact": "これまでの会話履歴を圧縮します",
  "description.export": "現在のセッションログを ZIP としてダウンロードします",
  "description.feedback": "このセッションについてのフィードバックを送ります",
  "description.goal": "長期実行タスクの目標を設定・確認します",
  "description.permission": "権限プリセットを切り替えます（サンドボックスモードと承認ポリシー）",
  "description.plan": "プランモードを切り替えます",
  "search.placeholder": "検索",
  "search.aria": "オプションを絞り込み",
  "status.loading": "オプションを読み込み中",
  "status.applying": "適用中",
  "status.empty": "オプションなし",
  "overlay.aria": "/{command} オプション",
  "listbox.aria": "/{command} の一致項目",
  "notice.attachmentsUnsupported":
    "/{command} は添付ファイルを受け付けません。先に取り除いてください",
  "section.add": "追加",
  "section.commands": "コマンド",
  "label.goal": "ゴール",
  "label.plan": "プラン",
  "label.feedback": "フィードバック",
  "label.compact": "コンテキストを圧縮",
  "label.permission": "権限",
  "label.export": "エクスポート",
  "token.goal": "goal",
  "token.plan": "plan",
  "token.feedback": "feedback",
  "token.compact": "compact",
  "token.permission": "permission",
  "token.export": "export",
};

const common: LocaleDictOf<"common"> = {
  ok: "OK",
  cancel: "キャンセル",
  close: "閉じる",
  copy: "コピー",
  copied: "コピーしました",
  "copy.failed": "コピーに失敗しました",
  "copy.value": "値をコピー",
  "copy.json": "JSON をコピー",
  "copy.path": "プロパティのパスをコピー",
  "copy.prettyJson": "整形 JSON をコピー",
  "copy.compactJson": "コンパクト JSON をコピー",
  "copy.optionsHint": "{action}。右クリックでコピー形式を選択",
  retry: "再試行",
  loading: "読み込み中",
  "load.failed": "読み込みに失敗しました",
  submit: "送信",
  submitting: "送信中",
  next: "次へ",
  previous: "前へ",
  skip: "スキップ",
  delete: "削除",
  edit: "編集",
  save: "保存",
  search: "検索",
  more: "その他",
  collapse: "折りたたむ",
  expand: "展開",
  back: "戻る",
  "brand.localBuild": "DSH ローカルビルド",
  unknown: "不明",
  none: "なし",
  truncated: "省略されています",
  "json.label": "JSON",
  "markdown.footnotes": "脚注",
  "markdown.truncatedCharacters": "… 以下は省略（全 {total} 文字）",
  "number.thousand": "{value}K",
  "number.million": "{value}M",
  "codeBlock.title": "コードブロック",
  "codeBlock.wrap": "行を折り返す",
  "codeBlock.unwrap": "行を折り返さない",
  "workspace.defaultName": "既定のワークスペース",
};

const conversation: LocaleDictOf<"conversation"> = {
  "hint.plan": "タスクを記述してプランを生成",
  "hint.goal": "目標を入力すると、エージェントが継続的に実行します",
  "hint.goal.active":
    "目標を実行中です。edit で編集 / pause で一時停止 / resume で再開 / clear でクリア",
  "placeholder.plan": "タスクを記述してプランを生成",
  "placeholder.default": "メッセージの送信やタスク実行、/ コマンド、@ ファイルやセッション",
  "placeholder.unavailable": "このセッションは利用できません",
  "placeholder.parentOffline":
    "親セッションがオフラインのため送信できません。実行中の処理は停止できます",
  "placeholder.hero": "作りたいものを入力、/ コマンド、@ ファイルやセッション",
  "placeholder.workspace": "ワークスペースを選択して開始",
  "placeholder.steerQueue": "Cmd/Ctrl+Enter で保留中のメッセージをすべて割り込み送信",
  "input.commands": "コマンド",
  "input.stop": "生成を停止",
  "input.send": "メッセージを送信",
  "input.send.queue": "キューに追加",
  "input.send.steer": "割り込み送信",
  "attachment.pending": "添付待ちのファイル",
  "attachment.scrollLeft": "添付ファイルを左へスクロール",
  "attachment.scrollRight": "添付ファイルを右へスクロール",
  "attachment.dropTitle": "ファイルや画像をここにドラッグして追加",
  "attachment.dropDesc": "画像の制限：最大 {count} 枚、各 {size}",
  "attachment.dropBlocked": "現在はファイルや画像を追加できません",
  "image.pending": "送信待ちの画像",
  "image.openOriginal": "元画像を表示",
  "image.openOriginalLabel": "{label}、クリックして元画像を表示",
  "image.remove": "画像 {name} を削除",
  "image.original": "元画像",
  "image.label": "画像",
  "image.loadFailed": "画像の読み込みに失敗しました。クリックして再試行",
  "image.loading": "画像を読み込み中",
  "image.preview": "元画像プレビュー",
  "image.closePreview": "元画像プレビューを閉じる",
  "image.unsupportedType": "対応している画像形式は PNG、JPG、WebP、GIF のみです",
  "image.tooMany": "メッセージ 1 件につき画像は {count} 枚までです",
  "image.fileTooLarge": "画像 1 枚のサイズは {size} 以下にしてください",
  "image.totalTooLarge": "画像の合計サイズが {size} を超えています。一部を削除してください",
  "image.tooManyPixels": "画像の解像度が大きすぎます。圧縮してから再試行してください",
  "image.dimensionTooLarge":
    "画像の幅と高さはそれぞれ {size}px 以内にしてください。縮小してから再試行してください",
  "image.modelUnsupported":
    "現在のモデルは画像に対応していません。画像対応のモデルに切り替えてください",
  "image.sendFailed":
    "画像の送信に失敗しました（{reason}）。画像を再度追加してから送信してください",
  "file.pending": "送信待ちのファイル",
  "file.remove": "ファイル {name} を削除",
  "file.uploading": "アップロード中…",
  "file.uploadFailed": "アップロードに失敗しました。クリックで再試行",
  "file.retry": "{name} のアップロードを再試行",
  "file.stillUploading": "ファイルをアップロード中です。完了してから送信してください",
  "file.sessionUnavailable": "セッションが利用できないため、ファイルをアップロードできません",
  "file.notStaged": "ファイルのアップロードが完了していません。追加し直してください",
  "file.label": "ファイル",
  "context.aria": "コンテキスト使用量 {percent}",
  "context.used": "コンテキスト使用量",
  "context.system": "システムプロンプト",
  "context.tools": "ツール",
  "context.messages": "メッセージ",
  "settings.enter.title": "実行中の送信動作",
  "settings.enter.description":
    "エージェント実行中の Enter キーと送信ボタンの動作。Cmd/Ctrl+Enter はもう一方の動作になります",
  "settings.enter.queue": "キューに追加",
  "settings.enter.steer": "割り込み送信",
  "hero.headline": "未知なるものへ",
  "hero.preview": "プレビュー",
  "hero.chooseWorkspace": "ワークスペースを選択",
  "session.hierarchy": "セッション階層",
  "todo.title": "タスク",
  "todo.progress.done": "{done} 完了",
  "todo.progress.active": "{active} 進行中",
  "todo.progress.pending": "{pending} 待機中",
  "todo.rowTitle": "タスクリストを更新",
  "todo.completed": "{done}/{total} 完了",
  "command.attachmentsUnsupported":
    "/{command} は添付ファイルを受け付けません。先に取り除いてください",
  "ask.rowTitle": "質問",
  "ask.waiting": "回答待ち",
  "ask.cancelled": "キャンセル済み",
  "ask.cancelledDetail": "この質問セットは回答の送信前にキャンセルされました。",
  "ask.interrupted": "中断済み",
  "ask.interruptedDetail": "この質問セットは回答の送信前に中断されました。",
  "ask.answered": "{answered}/{total} 回答済み",
  "ask.skipped": "未回答",
  "bash.running": "実行中",
  "bash.failed": "失敗",
  "bash.stopped": "停止済み",
  "row.running": "実行中",
  "row.failed": "失敗",
  "row.stopped": "停止済み",
  "row.input": "入力",
  "row.output": "出力",
  "row.inspect": "詳細を見る",
  "tool.title.search": "検索",
  "tool.title.read": "読み取り",
  "tool.title.bash": "Bash",
  "tool.title.write": "書き込み",
  "tool.title.edit": "編集",
  "tool.title.code": "コード",
  "tool.title.generic": "ツール呼び出し",
  "tool.title.inspect": "詳細を見る",
  "tool.title.runCordis": "Cordis プラグインを実行",
  "tool.title.stopCordis": "Cordis プラグインを停止",
  "tool.title.removeCordis": "Cordis プラグインを削除",
  "tool.title.pwsh": "Pwsh",
  "tool.title.readImage": "画像を読み取り",
  "tool.title.grep": "Grep",
  "tool.title.glob": "Glob",
  "tool.title.webSearch": "検索",
  "tool.title.webFetch": "Web 取得",
  "diff.collapseAria": "差分を折りたたむ",
  "diff.expandAria": "残り {count} 行の差分を展開",
  "diff.expandRest": "… 残り {count} 行",
  "read.window": "{total} 行中 {shown} 行を表示",
  "read.collapseAria": "内容を折りたたむ",
  "read.expandAria": "残り {count} 行を展開",
  "read.expandRest": "… 残り {count} 行",
  "search.paths": "{shown} 個のパス",
  "search.paths.truncated": "{total} 個のパス中 {shown} 個を表示",
  "search.matches": "{shown} 件の一致 · {files} 個のファイル",
  "search.matches.truncated": "{total} 件の一致中 {shown} 件を表示 · {files} 個のファイル",
  "search.noResults": "結果なし",
  "search.collapseAria": "検索結果を折りたたむ",
  "search.expandAria": "残り {count} 行の検索結果を展開",
  "search.expandRest": "… 残り {count} 行",
  "web.noResults": "結果が見つかりませんでした",
  "web.sourcesTruncated": "ソース一覧は切り詰められています",
  "web.http": "HTTP",
  "web.contentTruncated": "内容は切り詰められています",
  "details.running": "実行中",
  "queue.count": "{n} 件の保留メッセージ",
  "queue.sending": "送信中…",
  "queue.image": "待機中のメッセージ画像",
  "queue.file": "待機中のファイル {name}",
  "queue.edit": "保留メッセージを編集",
  "queue.edit.unsupported": "テキスト以外の内容が含まれているため、編集できません",
  "queue.save": "保留メッセージを保存",
  "queue.cancelEdit": "編集をキャンセル",
  "queue.remove": "保留メッセージを削除",
  "queue.steer": "割り込み送信",
  "queue.steer.unavailable": "実行中のみ割り込み送信できます",
  "queue.editFailed":
    "編集に失敗しました：このメッセージはすでに送信が始まっている可能性があります。",
  "queue.removeFailed":
    "削除に失敗しました：このメッセージはすでに送信が始まっている可能性があります。",
  "queue.steerFailed": "割り込み送信に失敗しました。再試行してください。",
  "terminal.signal": "シグナル {signal}",
  "terminal.exitCode": "終了コード {code}",
  "terminal.running": "実行中",
  "terminal.failed": "失敗",
  "terminal.done": "完了",
  "terminal.noOutput": "出力なし",
  "terminal.collapseAria": "出力を折りたたむ",
  "terminal.expandAria": "残り {n} 行の出力を展開",
  "terminal.expandRest": " 残り {n} 行",
  "terminal.sendInput": "（入力を送信）",
  "terminal.session": "ターミナル {sessionId}",
  "shortcut.newline": "改行",
  "shortcut.complementary": "キュー追加／割り込み送信のもう一方の操作を使う",
  "shortcut.slash": "コマンドメニューを開く",
  "shortcut.mention": "参照メニューを開く",
  "input.file": "ファイル",
  "attachment.directoryDesktopOnly":
    "フォルダーの追加はデスクトップアプリでのみ利用できます。ブラウザーではファイルを個別に追加してください。",
  "attachment.pathUnavailable":
    "フォルダーのパスを取得できませんでした。もう一度ドラッグしてください。",
  "attachment.pathUnsupported":
    "参照に使えない文字がパスに含まれています。名前を変更して再試行してください。",
  "todo.status.completed": "完了",
  "todo.status.inProgress": "進行中",
  "todo.status.pending": "未着手",
  "tool.title.createGoal": "ゴールを作成",
  "tool.title.getGoal": "ゴールを表示",
  "tool.title.updateGoal": "ゴールを更新",
  "tool.preparing.content": "{kilobytes}KBのコンテンツを準備中",
  "tool.title.createSchedule": "リマインダーを作成",
  "tool.title.listSchedules": "リマインダー一覧",
  "tool.title.deleteSchedule": "リマインダーを削除",
  "tool.title.updateSchedule": "リマインダーを更新",
  "detail.state": "状態",
  "detail.todo.completed": "完了",
  "detail.todo.in_progress": "進行中",
  "detail.todo.pending": "未着手",
  "detail.todo.empty": "タスクリストは空です",
  "todo.diff.initial": "最初のリスト",
  "todo.diff.compare": "前回のリストからの変更",
  "todo.diff.unavailable": "前回のリストを利用できません",
  "todo.diff.noChanges": "リストに変更はありません",
  "todo.diff.added": "{count}件追加",
  "todo.diff.updated": "{count}件更新",
  "todo.diff.removed": "{count}件削除",
  "todo.diff.unchanged": "{count}件変更なし",
  "todo.diff.addedItem": "追加",
  "todo.diff.updatedItem": "状態を変更",
  "todo.diff.movedItem": "順序を変更",
  "todo.diff.removedItem": "削除",
  "detail.goal.empty": "ゴールなし",
  "detail.goal.active": "進行中",
  "detail.goal.disarmed": "継続待ち",
  "detail.goal.paused": "一時停止",
  "detail.goal.blocked": "ブロック中",
  "detail.goal.complete": "完了",
  "detail.goal.rounds": "ラウンド数",
  "detail.goal.reason": "阻害要因",
  "detail.days": "{count}日",
  "detail.hours": "{count}時間",
  "detail.minutes": "{count}分",
  "detail.seconds": "{count}秒",
  "detail.schedule.once": "一度だけ",
  "detail.schedule.every": "{interval}ごと",
  "detail.schedule.when": "実行予定",
  "detail.schedule.frequency": "繰り返し",
  "detail.schedule.scheduled": "実行待ち",
  "detail.schedule.overdue": "予定時刻を過ぎています。セッションの再開待ちです。",
  "detail.schedule.empty": "リマインダーなし",
  "detail.schedule.deleted": "削除済み",
  "detail.schedule.count": "リマインダー {count}件",
  "detail.schedule.daily": "毎日 {time}（{zone}）",
  "detail.schedule.weekly": "毎週 {days} {time}（{zone}）",
  "detail.schedule.cron": "Cron {expression}（{zone}）",
  "detail.weekday.1": "月",
  "detail.weekday.2": "火",
  "detail.weekday.3": "水",
  "detail.weekday.4": "木",
  "detail.weekday.5": "金",
  "detail.weekday.6": "土",
  "detail.weekday.7": "日",
  "detail.weekday.join": "、",
  "tool.title.inspectProviders": "プロバイダーを検査",
  "tool.title.queryRuntime": "ランタイムを照会",
  "tool.title.inspectPlugins": "プラグインを検査",
  "tool.title.workflow": "ワークフローを実行",
  "tool.title.ralph": "ralph ループを実行",
  "tool.title.readEvent": "イベントを読み込む",
  "tool.title.searchEvents": "イベントを検索",
  "tool.title.traceEvent": "イベントを追跡",
  "tool.title.searchSessions": "セッションを検索",
  "tool.title.traceSession": "セッションを追跡",
  "tool.title.listModels": "モデル一覧",
  "tool.title.subagent": "サブエージェントを作成",
  "tool.title.listAgents": "サブエージェント一覧",
  "tool.title.sendMessage": "メッセージを送信",
  "tool.title.interruptAgent": "エージェントに割り込む",
  "tool.title.listJobs": "バックグラウンドジョブ一覧",
  "tool.title.readJob": "ジョブの出力を読む",
  "tool.title.killJob": "バックグラウンドジョブをキャンセル",
  "tool.title.openTerminal": "ターミナルを開く",
  "tool.title.readTerminal": "ターミナルを読み込む",
  "tool.title.listTerminals": "ターミナル一覧",
  "tool.title.signalTerminal": "ターミナルにシグナルを送信",
  "tool.title.closeTerminal": "ターミナルを閉じる",
  "tool.title.lsp": "コードシンボルを照会",
  "tool.title.findDefinition": "定義を検索",
  "tool.title.findReferences": "参照を検索",
  "tool.title.findImplementation": "実装を検索",
  "tool.title.hoverSymbol": "シンボルを検査",
  "tool.title.spawnTeammate": "チームメイトを作成",
  "tool.title.createTeamTask": "チームタスクを作成",
  "tool.title.getTeamTask": "チームタスクを読む",
  "tool.title.updateTeamTask": "チームタスクを更新",
  "tool.title.listTeamTasks": "チームタスク一覧",
  "tool.title.waitAgent": "サブエージェントを待つ",
  "detail.recordedResult": "記録された結果",
  "detail.empty": "結果なし",
  "detail.none": "なし",
  "detail.yes": "はい",
  "detail.no": "いいえ",
  "detail.moreInInspect": "検査ビューにさらに {count}件あります",
  "detail.status.running": "実行中",
  "detail.status.idle": "待機中",
  "detail.status.ready": "準備完了",
  "detail.status.inactive": "非アクティブ",
  "detail.status.provisioning": "環境を準備中",
  "detail.status.failed": "失敗",
  "detail.status.completed": "完了",
  "detail.status.deleted": "削除済み",
  "detail.status.killed": "キャンセル済み",
  "detail.status.accepted": "受理済み",
  "detail.status.queued": "キュー待ち",
  "detail.status.exited": "終了",
  "detail.field.id": "ID",
  "detail.field.revision": "リビジョン",
  "detail.field.platform": "プラットフォーム",
  "detail.field.provider": "プロバイダー",
  "detail.field.model": "モデル",
  "detail.field.role": "役割",
  "detail.field.context": "コンテキスト",
  "detail.field.owner": "所有者",
  "detail.field.ready": "準備完了",
  "detail.field.dependencies": "依存関係",
  "detail.field.writeScopes": "書き込み範囲",
  "detail.field.warnings": "警告",
  "detail.field.diagnostics": "診断",
  "detail.field.methods": "メソッド",
  "detail.field.inputSchema": "入力スキーマ",
  "detail.field.outputSchema": "出力スキーマ",
  "detail.field.currentPackage": "現在のパッケージ",
  "detail.field.nextPackage": "次のパッケージ",
  "detail.field.latestRun": "直近の実行",
  "detail.field.packages": "パッケージ",
  "detail.field.registrations": "登録",
  "detail.field.props": "プロパティ",
  "detail.field.data": "データ",
  "detail.field.source": "ソース",
  "detail.field.content": "コンテンツ",
  "detail.field.message": "メッセージ",
  "detail.field.messageId": "メッセージ ID",
  "detail.field.root": "ルート",
  "detail.field.pid": "プロセス ID",
  "detail.field.type": "種類",
  "detail.field.time": "時刻",
  "detail.field.seq": "イベント連番",
  "detail.field.turn": "ターン",
  "detail.field.step": "ステップ",
  "detail.field.callId": "呼び出し ID",
  "detail.field.agents": "開始したエージェント",
  "detail.field.result": "結果",
  "detail.field.parent": "親",
  "detail.field.depth": "深さ",
  "detail.field.exitCode": "終了コード",
  "detail.field.signal": "シグナル",
  "detail.field.previousStatus": "直前の状態",
  "detail.field.agent": "エージェント ID",
  "detail.field.job": "ジョブ ID",
  "detail.field.task": "タスク",
  "detail.field.processGroup": "プロセスグループ",
  "detail.field.availability": "利用可否",
  "detail.field.bestMatch": "最も一致する項目",
  "detail.field.target": "対象イベント",
  "detail.field.surface": "記録状態",
  "detail.agents.count": "エージェント {count}件",
  "detail.jobs.count": "バックグラウンドジョブ {count}件",
  "detail.terminals.count": "ターミナル {count}件",
  "detail.tasks.count": "チームタスク {count}件",
  "detail.tasks.nextPage": "続きのタスクがあります。次のカーソルは {cursor} です。",
  "detail.locations.count": "{count}か所",
  "detail.location": "{line}行、{column}列",
  "detail.receipt.delivered": "メッセージを配信しました",
  "detail.receipt.interrupt": "割り込みを要求しました",
  "detail.receipt.started": "開始しました",
  "detail.receipt.cancel": "キャンセルを要求しました",
  "detail.receipt.alreadyFinished": "すでに終了しています",
  "detail.receipt.signal": "シグナルを送信しました",
  "detail.receipt.closed": "終了しました",
  "detail.receipt.closing": "終了処理中",
  "detail.wait.noProgress": "実行中のサブエージェントはありません",
  "detail.wait.title": "サブエージェントの動作状況",
  "detail.wait.timeout": "待機がタイムアウトしました",
  "detail.wait.changed": "変更を検出しました",
  "detail.agent.reply": "エージェントの応答",
  "detail.models.title": "利用可能なモデル",
  "detail.output.lines": "全 {total}行の {begin}〜{end}行",
  "detail.output.truncated": "出力は一部省略されています",
  "detail.providers.count": "検査プロバイダー {count}件",
  "detail.plugins.count": "動的プラグイン {count}件",
  "detail.workflow.script": "ワークフロースクリプト",
  "detail.ralph.reportedComplete": "ワーカーが完了を報告しました",
  "detail.ralph.reportedBlocker": "ワーカーが阻害要因を報告しました",
  "detail.ralph.limit": "ラウンド数の上限に達しました",
  "detail.report.nextSteps": "残りの作業",
  "detail.trace.replacedBy": "置き換え先",
  "detail.trace.replacementChain": "置き換えの連鎖",
  "detail.trace.replaces": "置き換えられたイベント",
  "detail.trace.sources": "元のイベント",
  "detail.trace.derived": "派生イベント",
  "detail.trace.ancestors": "祖先セッション",
  "detail.trace.descendants": "子孫セッション",
  "detail.matches.count": "{count}件一致",
  "detail.matches.capped": "結果の上限に達しました。検索範囲を絞り込んでください。",
  "detail.event.neighbors": "前後のイベント",
  "ask.pending": "処理を継続中・回答可能",
  "ask.pendingDetail": "未回答の質問には、入力欄から引き続き回答できます。",
  "ask.reopen": "回答する",
  "ask.review": "回答を表示",
  "ask.closed": "終了",
  "ask.closedDetail": "この質問は終了しています。結果は下の会話に表示されます。",
  "row.preparing": "ツール呼び出しを準備中",
  "tool.autoReviewRejected": "自動レビューにより拒否されました",
  "tool.autoReviewNotExecuted": "ツールは実行されませんでした。理由：{reason}",
  "tool.autoReviewReasonFallback": "自動レビューでこの操作が許可されませんでした",
  "error.sessionInUse":
    "このセッションはすでに使用中です。別の DSH（dsh web やデスクトップアプリなど）で実行中の可能性があります。他の DSH を終了して再試行してください。",
  "terminal.noExitCode": "終了コードなし",
};

const cordis: LocaleDictOf<"cordis"> = {
  "row.defineTitle": "Cordis プラグインを登録",
  "row.runTitle": "Cordis プラグインを実行",
  "row.updateTitle": "Cordis プラグインを更新",
  "row.stopTitle": "Cordis プラグインを停止",
  "row.removeTitle": "Cordis プラグインを削除",
  "purpose.missing": "（用途未入力）",
  "status.idle": "有効化待ち",
  "status.awaitingApproval": "承認待ち",
  "status.failed": "実行失敗",
  "status.clientPending": "Client 有効化待ち",
  "status.running": "実行中",
  "status.removed": "削除済み",
  "status.superseded": "更新あり",
  "run.removed": "パッケージが存在しません",
  "run.superseded": "より新しい実行カードがあります。下を確認してください",
  "panel.hint": "実行操作は、画面左下の設定の上にある Cordis パネルにあります",
  "panel.plugins.aria": "Cordis プラグイン",
  "panel.approvals.aria": "Cordis 承認",
  "panel.trigger": "Cordis プラグイン",
  "panel.runningCount": "{count} 件実行中",
  "panel.title": "Cordis プラグイン",
  "panel.empty": "まだプラグインが定義されていません",
  "panel.loading": "読み込み中",
  "panel.readFailed": "プラグイン一覧の読み込みに失敗しました：{message}",
  "panel.group.current": "現在のセッション",
  "panel.group.others": "その他のセッション",
  "panel.version": "バージョン",
  "panel.current": "現在：{packageId}",
  "panel.next": "切り替え待ち：{packageId}",
  "action.approve": "許可",
  "action.approveOnce": "このバージョンのみ許可",
  "action.approvePlugin": "このプラグインの今後のバージョンを許可",
  "action.decline": "拒否",
  "action.run": "実行",
  "action.stop": "停止",
  "action.remove": "削除",
  "action.retry": "再試行",
  "action.rollback": "ロールバック",
  "action.inspect": "詳細を見る",
  "render.failedAbdicated": "{slot} のレンダリングに失敗し、デフォルト画面に戻しました：",
  "render.failedHeld": "{slot} のレンダリングに失敗しました：",
  "a11y.defining": "プラグインを定義中",
  "a11y.failed": "定義失敗",
  "a11y.stopped": "定義が中断されました",
  "body.source": "プラグインコード",
  "body.hostCode": "Host",
  "body.clientCode": "Client",
  "body.output": "結果",
  "body.copy": "コピー",
  "body.copied": "コピーしました",
  "a11y.preparing": "Cordisツールの呼び出しを準備中",
};

const deliverables: LocaleDictOf<"deliverables"> = {
  "presented.nativeUnavailable":
    "このファイルには利用可能なホストパスがありません。サイドバーでプレビューしてください",
  "presented.revealError": "ファイルマネージャーで表示できませんでした。再試行してください",
  "presented.directoryError": "親フォルダーを開けませんでした。再試行してください",
  "presented.directoryOpening": "親フォルダーを開いています…",
  "presented.directoryOpened": "親フォルダーを開くよう要求しました",
  "presented.revealed": "ファイルマネージャーでの表示を要求しました",
  "presented.revealing": "ファイルマネージャーに表示しています…",
  "presented.unavailable": "このホストにはファイルやフォルダーを開けるデスクトップがありません",
  "presented.retry": "再試行",
  "presented.hostError": "ホストのデスクトップ情報を読み取れませんでした",
  "presented.preview": "サイドバーでプレビュー",
  "presented.previewButton": "{name} をサイドバーで開く",
  "presented.previewCard": "{name} をサイドバーでプレビュー",
  "presented.all": "すべての {count} 個のファイル",
  "presented.expandAria": "提示された {count} 個のファイルをすべて表示",
  "presented.collapse": "折りたたむ",
  "presented.collapseAria": "提示されたファイル一覧を折りたたむ",
  "presented.opening": "開いています…",
  "presented.opened": "デフォルトのアプリで開きました",
  "presented.error": "開けませんでした。クリックで再試行",
  "presented.file": "ファイル",
  "row.title": "ファイルを提示",
  "row.running": "提示中",
  "row.ok": "提示済み",
  "row.error": "提示に失敗",
  "row.stopped": "中断済み",
  "row.inspect": "呼び出しを見る",
  "row.preparing": "提示するファイルを準備中",
  "changes.title": "{count}個のファイルを編集",
  "changes.singleTitle": "{name}を編集",
  "changes.added": "+{count}",
  "changes.deleted": "-{count}",
  "changes.binary": "バイナリ",
  "changes.openReview": "このターンの変更をサイドバーで確認",
  "changes.all": "全{count}ファイル",
  "changes.expandAria": "変更された{count}個のファイルをすべて表示",
  "changes.collapse": "折りたたむ",
  "changes.collapseAria": "変更されたファイルを折りたたむ",
  "changes.oversized": "サイズ超過",
  "changes.viewDiff": "{name}の変更を表示",
  "review.title": "レビュー · ターン{turn}",
  "review.selectFile": "確認するファイルを選択",
  "review.split": "左右分割表示に切り替え",
  "review.unified": "統合表示に切り替え",
  "review.splitAria": "左右分割表示",
  "review.wrap": "行の折り返しを有効にする",
  "review.nowrap": "行の折り返しを無効にする",
  "review.wrapAria": "行の折り返し",
  "review.openFile": "ファイル全体をサイドバーで開く",
  "review.openFileAria": "{name}をサイドバーで開く",
  "diff.loading": "変更を読み込み中…",
  "diff.missing": "このターンの変更内容はもう利用できません",
  "diff.error": "変更を読み込めませんでした",
  "diff.binary": "バイナリファイルのため、変更を表示できません",
  "diff.oversized": "ファイルが大きすぎるため、変更を表示できません",
  "diff.created": "このターンで作成",
  "diff.deleted": "このターンで削除",
  "diff.unchanged": "両側の行は同一です",
  "diff.coarse": "行の比較がタイムアウトしたため、ファイル全体の置換として表示しています",
  "diff.truncated": "最初の{count}行を表示しています",
};

const directoryBrowser: Record<DirectoryBrowserKey, string> = {
  "browser.title": "ワークスペースディレクトリを選択",
  "browser.home": "ホーム",
  "browser.newFolder": "新規フォルダー",
  "browser.folderName": "フォルダー名",
  "browser.createIn": "「{name}」に新規フォルダーを作成",
  "browser.untitledFolder": "無題のフォルダー",
  "browser.create": "作成",
  "browser.cancel": "キャンセル",
  "browser.open": "開く",
  "browser.editPath": "パスを編集",
  "browser.loading": "読み込み中",
  "browser.truncated": "フォルダーが多すぎるため、先頭部分のみ表示しています。",
  "browser.showHidden": "隠しファイルを表示",
};

const documentHtml: Record<DocumentHtmlKey, string> = {
  title: "HTML",
  frame: "HTML ドキュメントのプレビュー",
  loading: "HTML プレビューを準備中…",
  failed: "この HTML ドキュメントはプレビューできませんでした。",
};

const documentMarkdown: Record<DocumentMarkdownKey, string> = {
  "viewer.label": "Markdown",
  "code.copy": "コピー",
  "code.copied": "コピーしました",
  footnotes: "脚注",
};

const feedback: LocaleDictOf<"feedback"> = {
  "action.like": "良い回答",
  "action.likeActive": "評価を取り消す",
  "action.dislike": "問題のある回答",
  "action.dislikeActive": "評価を取り消す",
  "dialog.title": "フィードバックを送信",
  "dialog.categories": "フィードバックのカテゴリー",
  "dialog.detail": "フィードバックの詳細",
  "dialog.hint": "改善に役立つ詳細を書いてください。送信内容には現在の会話ログが含まれます",
  "category.task-result": "タスクの結果",
  "category.instruction-following": "指示の理解と追従",
  "category.product-interaction": "製品の機能と操作",
  "category.service-stability": "安定性と速度",
  "category.resource-cost": "リソース使用量とコスト",
  "category.security-privacy-permission": "セキュリティ・プライバシー・権限",
  "category.other": "その他",
  "toast.recorded": "フィードバックありがとうございます",
  "error.conflict": "このフィードバックは別の場所で変更されました。最新の状態を表示しています",
  "error.load": "フィードバックの読み込みに失敗しました",
  "error.generic": "フィードバックの保存に失敗しました",
  "error.noteTooLarge": "説明が長すぎます。短くしてから再度送信してください",
};

const goal: LocaleDictOf<"goal"> = {
  "phase.active": "進行中の目標",
  "phase.active.disarmed": "未実行の目標",
  "phase.paused": "一時停止中の目標",
  "phase.blocked": "ブロックされた目標",
  "objective.aria": "目標の内容",
  "commandInput.aria": "コマンド入力",
  "action.save": "目標を保存",
  "action.cancel": "編集をキャンセル",
  "action.pause": "目標を一時停止",
  "action.resume": "目標を再開",
  "action.edit": "目標を編集",
  "action.clear": "目標をクリア",
};

const job: LocaleDictOf<"job"> = {
  "count.live.one": "{count} 件のバックグラウンドタスクを実行中",
  "count.live.other": "{count} 件のバックグラウンドタスクを実行中",
  "count.idle.one": "{count} 件のバックグラウンドタスク",
  "count.idle.other": "{count} 件のバックグラウンドタスク",
  "list.aria": "バックグラウンドタスク",
  "status.running": "実行中",
  "status.stopping": "停止中",
  "status.completed": "完了",
  "status.killed": "キャンセル済み",
  "status.failed": "失敗",
  "duration.seconds": "{seconds}秒",
  "duration.minutes": "{minutes}分{seconds}秒",
  "duration.hours": "{hours}時間{minutes}分",
  "duration.title.live": "{duration} 経過",
  "duration.title.done": "所要時間 {duration}",
  "section.live": "実行中",
  "section.settledCount": "完了 {count}件",
  "section.clear": "クリア",
  "row.expandAria": "{label}の出力をリアルタイム表示",
  "row.collapseAria": "{label}のリアルタイム出力を隠す",
  "kill.stop": "タスク{label}を停止",
  "kill.confirm": "もう一度クリックして確認",
  "kill.confirmAction": "停止を確定",
  "kill.failed": "停止できませんでした",
  "output.gap": "… 以前の出力は破棄されました …",
  "output.error": "リアルタイム出力が中断されました: {error}",
  "terminal.signal": "シグナル {signal}",
  "terminal.exitCode": "終了コード {code}",
  "terminal.noExitCode": "終了コードなし",
  "terminal.running": "実行中",
  "terminal.failed": "失敗",
  "terminal.done": "完了",
  "terminal.copy": "コピー",
  "terminal.copied": "コピー済み",
  "terminal.noOutput": "（出力なし）",
  "terminal.collapse": "折りたたむ",
  "terminal.collapseAria": "出力を折りたたむ",
  "terminal.expand": "さらに{n}行を表示",
  "terminal.expandAria": "折りたたまれた出力{n}行を展開",
};

const model: LocaleDictOf<"model"> = {
  "command.description": "この会話で使用するモデルを選択",
  "option.loadError": "カタログの読み込みに失敗しました：{message}",
  "trigger.fallback": "モデルを選択",
  "trigger.loading": "モデルを読み込み中…",
  "trigger.selectAria": "モデルを選択",
  "trigger.aria": "モデルを選択、現在 {model}",
  "trigger.ariaEffort": "モデルを選択、現在 {model}、思考レベル {effort}",
  "menu.aria": "モデルと思考レベル",
  "menu.model": "モデル",
  "menu.effort": "思考レベル",
  "effort.providerDefault": "デフォルト",
  "status.loading": "モデル一覧を更新中",
  "error.action": "モデルの操作に失敗しました：{message}",
  "action.reload": "再読み込み",
  "warning.groupLoad": "{name} の読み込みに失敗しました：{message}",
  "empty.models": "利用可能なモデルがありません。",
  "empty.efforts": "このモデルには思考レベルが設定されていません。",
  "provider.account": "DeepSeek アカウント",
  "command.label": "モデル",
  "error.sessionInUse":
    "このセッションはすでに使用中です。別のDSHインスタンス（dsh webやデスクトップアプリなど）が実行中の可能性があります。他のDSHインスタンスを終了して、もう一度お試しください。",
  "search.placeholder": "モデルを検索…",
  "search.clear": "検索をクリア",
  "search.empty": "一致するモデルがありません。",
};

const openInApp: LocaleDictOf<"open-in-app"> = {
  "open.title": "{app} でワークスペースを開く",
  "open.tooltip": "ローカルで開く",
  "app.cursor": "Cursor",
  "app.vscode": "VS Code",
  "app.vscodeinsiders": "VS Code Insiders",
  "app.windsurf": "Windsurf",
  "app.zed": "Zed",
  "app.sublimetext": "Sublime Text",
  "app.xcode": "Xcode",
  "app.androidstudio": "Android Studio",
  "app.intellij": "IntelliJ IDEA",
  "app.pycharm": "PyCharm",
  "app.webstorm": "WebStorm",
  "app.phpstorm": "PhpStorm",
  "app.goland": "GoLand",
  "app.rider": "Rider",
  "app.rustrover": "RustRover",
  "app.fork": "Fork",
  "app.sourcetree": "Sourcetree",
  "app.github": "GitHub Desktop",
  "app.tower": "Tower",
  "app.gitkraken": "GitKraken",
  "app.smartgit": "SmartGit",
  "app.sublimemerge": "Sublime Merge",
  "app.ghostty": "Ghostty",
  "app.warp": "Warp",
  "app.iterm": "iTerm2",
  "app.kitty": "kitty",
  "app.windowsterminal": "Windows ターミナル",
  "app.gitbash": "Git Bash",
  "app.gnometerminal": "GNOME 端末",
  "app.konsole": "Konsole",
  "app.finder": "Finder",
  "app.explorer": "エクスプローラー",
  "app.filemanager": "ファイル",
  "app.terminal": "ターミナル",
  "path.appDefault": "{app}（既定）",
  "path.appsError": "アプリケーションを読み込めませんでした",
  "shortcut.busy": "ワークスペースを開いています",
  "shortcut.unavailable": "現在のワークスペースまたはローカルアプリケーションを利用できません",
  "path.open": "開く",
  "path.more": "他の方法で開く",
  "path.reveal": "ファイルの場所を表示",
  "path.openError": "開けませんでした。もう一度お試しください。",
  "path.revealError": "ファイルの場所を表示できませんでした。もう一度お試しください。",
};

const permissionAccess: Record<PermissionAccessKey, string> = {
  "preset.readOnly": "閲覧のみ",
  "preset.workspaceWrite": "ワークスペース内の書き込み",
  "preset.fullAccess": "フルアクセス",
  "confirm.title": "フルアクセスを有効にしますか？",
  "confirm.description":
    "フルアクセスを有効にすると、エージェントの確認ステップが減り、機密性の高い操作、ファイル変更、外部コマンドを含むより多くの操作を直接実行できるようになります。現在のタスクを信頼できる場合にのみ使用してください。",
  "confirm.acknowledge": "リスクを理解した上で続行します",
  "confirm.cancel": "キャンセル",
  "confirm.enable": "フルアクセスを有効化",
  mode: "アクセスモード（現在: {name}）",
  close: "閉じる",
  "auto.label": "自動レビュー",
  "auto.badge": "試験",
  "auto.description":
    "ネイティブツール呼び出しとPTC内部呼び出しを毎回同じモデルでレビューし、サンドボックスなしで実行します。実験的な機能です。",
  "auto.confirm.title": "自動レビュー（実験的）を有効にしますか？",
  "auto.confirm.description":
    "自動レビューはサンドボックスなしで実行します。ネイティブツール呼び出しとPTC内部呼び出しの前に、現在のエージェントと同じモデルが毎回実行を許可するか判断します。モデルが拒否した呼び出しは、あなたが個別に承認または拒否します。この機能は実験的なもので、許可や拒否を誤る可能性があり、追加のトークンを消費します。",
  "auto.confirm.acknowledge": "これらのリスクを理解し、続行します",
  "auto.confirm.enable": "自動レビューを有効にする",
};

const plan: LocaleDictOf<"plan"> = {
  "chip.label": "プラン",
  "chip.on.aria": "プランモードはオンです。押してオフにします",
  "chip.on.title": "プランモードはオン。クリックでオフ（/plan off）",
  "chip.exitFailed": "プランモードから抜けられませんでした",
  "preview.title": "プラン",
  "preview.document": "プラン · Markdown",
  "preview.action": "開く",
  "preview.open": "プランをサイドバーで開く",
  "preview.full": "プラン全体を表示",
  "preview.openNamed": "プランを開く: {title}",
  "preview.loading": "プランを読み込み中…",
  "preview.failed": "プランを読み込めませんでした",
  "preview.invalidAddress": "プランのアドレスが無効です",
  "preview.historyUnavailable": "セッション履歴を利用できません",
  "preview.notFound": "このプランは見つかりませんでした",
  "preview.unavailable": "プランのプレビューを利用できません",
  "preview.expired":
    "この一時的なプランのプレビューは期限切れです。レビュー待ちのカードから開き直してください。",
};

const question: LocaleDictOf<"question"> = {
  "error.incomplete": "先にこの質問に回答してください。",
  "error.unanswered": "オプションを選択するか、カスタム回答を入力してください。",
  "nav.prev": "前の質問",
  "nav.next": "次の質問",
  "nav.minimize": "質問カードを折りたたむ",
  "nav.maximize": "質問カードを展開",
  "nav.cancel": "すべての質問を破棄",
  "option.recommended": "推奨",
  "custom.placeholder": "回答を入力",
  "action.skip": "この質問をスキップ",
  "action.next": "次へ",
  "plan.header": "プランレビュー",
  "plan.approve": "承認",
  "plan.decline": "拒否",
  "plan.discuss": "チャットで相談",
  "error.unavailable": "現在は送信できません。少し待ってからもう一度お試しください。",
  "error.resubmit": "作業が続行される前に回答が届きませんでした。もう一度送信してください。",
  "status.sent": "返信は送信されましたが、パネルを閉じられませんでした。",
  "wait.takeTime": "時間をかけて回答",
  "wait.countdown": "{seconds}s後に続行",
  "wait.paused": "一時停止中 · 残り{seconds}s",
  "wait.held": "回答を待っています",
  "wait.continued": "作業は続行しましたが、まだ回答できます",
  "review.status": "回答済み",
  "review.skipped": "この質問はスキップされました。",
  "reply.label": "以前の未回答の質問に返信",
  "reply.open": "質問の詳細を開く",
  "reply.close": "質問の詳細を閉じる",
  "reply.answerLabel": "回答: ",
  "reply.skipped": "スキップ済み",
  "nav.close": "パネルを閉じる（ツール呼び出しから開き直せます）",
};

const reference: Record<ReferenceKey, string> = {
  "section.files": "ファイルとフォルダー",
  "section.sessions": "セッション",
  "candidate.noCwd": "（作業ディレクトリなし）",
  "crumb.root": "ワークスペース",
  "time.now": "たった今",
  "time.minutes": "{n}分",
  "time.hours": "{n}時間",
  "time.days": "{n}日",
  "time.months": "{n}ヶ月",
  "time.years": "{n}年",
  "section.subagents": "サブエージェント",
};

const sessionLogDownload: LocaleDictOf<"session-log-download"> = {
  "header.more": "その他の操作",
  "menu.download": "セッションログをダウンロード",
  "dialog.preparingTitle": "セッションをエクスポート中",
  "dialog.preparingDescription":
    "現在のセッション、子セッション、添付ファイルを含む ZIP ファイルを準備しています。",
  "dialog.successTitle": "セッションのダウンロードを開始しました",
  "dialog.successDescription": "ブラウザーがセッションの ZIP ファイルをダウンロードしています。",
  "dialog.errorTitle": "セッションのエクスポートに失敗しました",
  "dialog.close": "閉じる",
  "dialog.commandFailed": "セッションのエクスポートを開始できませんでした。",
  "menu.feedback": "フィードバック",
};

const settings: LocaleDictOf<"settings"> = {
  trigger: "設定",
  title: "設定",
  close: "閉じる",
  openDocument: "設定ファイルを開く",
  "openDocument.error": "設定ファイルを開けませんでした",
  "general.nav": "一般",
  "connection.error": "接続が切断されました",
  "connection.connecting": "再接続中",
  "connection.connected": "接続済み",
  "connection.reconnect": "接続が切断されました。今すぐ再接続",
  "connection.restart": "再接続中。今すぐ再接続",
  "shortcut.open": "設定を開く",
  "desktop.update.available": "更新",
  "desktop.update.checking": "更新を確認中…",
  "desktop.update.progress": "{percent}%",
  "desktop.update.verifying": "更新ファイルを検証中…",
  "desktop.update.installing": "再起動を準備中…",
  "desktop.update.ready": "インストールして再起動",
  "desktop.update.retry": "更新を再試行",
  "desktop.update.versionDetail": "{label}: {version}",
  "desktop.update.downloadDetail":
    "更新をダウンロード中: {percent}%\n更新先のバージョン: {version}",
  "desktop.update.checkFailed": "更新を確認できませんでした。後でもう一度お試しください。",
  "desktop.update.downloadFailed": "更新をダウンロードできませんでした。もう一度お試しください。",
  "desktop.update.installFailed":
    "更新をインストールできませんでした。後でもう一度お試しください。",
  "desktop.update.checkNetworkFailed":
    "更新を確認できませんでした。接続を確認して、もう一度お試しください。",
  "desktop.update.downloadNetworkFailed":
    "更新をダウンロードできませんでした。接続を確認して、もう一度お試しください。",
  "desktop.update.installNetworkFailed":
    "更新をインストールできませんでした。接続を確認して、もう一度お試しください。",
  "desktop.update.stopFailed":
    "タスクを安全に停止できませんでした。更新はインストールされていません。後でもう一度お試しください。",
  "desktop.update.tasksChanged":
    "新しいタスクが開始されました。タスクを停止して更新するには、もう一度確認してください。",
  "desktop.update.tasksUnavailable":
    "タスクの状態を確認できません。ワークスペースの準備ができてから、もう一度更新をお試しください。",
  "general.currentVersion": "現在のバージョン: {version}",
  "developerTools.title": "コーディングビューを表示",
  "developerTools.error": "保存できませんでした。もう一度お試しください。",
  "developerTools.description": "トレース、コード差分、すべてのエージェントプリセットを表示します",
};

const settingsAgentPreset: LocaleDictOf<"settings.agentPreset"> = {
  seatHint: "新しいタスクのエージェントプリセットを選択",
  headerHint: "このタスクの開始時に選択したエージェントプリセット",
  nav: "エージェントプリセット",
  sectionIntro:
    "エージェントのツールと動作を選択します。日常的なタスクにはスタンダードモード、DSH の機能追加にはクリエイターモードを使ってください。",
  setDefault: "新規タスクの既定に設定",
  view: "構成を表示",
  presetStandardName: "スタンダードモード",
  presetStandardDescription:
    "コード、ファイル、情報を扱います。ほとんどのタスクに適しており、検索、編集、ターミナルコマンドなどのツールを必要に応じて使えます。",
  presetPtcName: "PTC モード",
  presetPtcDescription:
    "スタンダードモードの全機能を備えています。ツールを一括で呼び出し、結果の絞り込み、整理、重複除去、集計、要約を行うタスクに適しています。",
  presetMinimalName: "ミニマルモード",
  presetMinimalDescription:
    "ターミナルツールのみで作業します。エージェントの基本性能の検証や比較に使えます。",
  presetCordisName: "クリエイターモード",
  presetCordisDescription:
    "会話を通じて DSH をカスタマイズします。機能や UI を追加するプラグインを作成したり、ツールとプロンプトを組み合わせて自分のモードを作成したりできます。",
  inUse: "新規タスクの既定",
  builtInGroup: "ビルトイン",
  customGroup: "カスタム",
  noDescription: "説明はありません。",
  brokenBadge: "読み込み失敗",
  switchRefused: "{name} に切り替えられませんでした：{reason}",
  close: "閉じる",
  creatorDraft: "クリエイターモードでカスタムプリセットを作成",
  modeExplanation: "モードの説明",
  howToUse: "使い方",
  guideSections: "ガイドの項目",
  guideExampleTask: "タスクの例",
  guideCopy: "コピー",
  guideCopied: "コピーしました",
  guideFootnotes: "脚注",
  guideStandardIntro:
    "新しいタスクを始めるときにスタンダードモードを選択します。達成したいこと、関連するファイル、結果の確認方法を伝えてください。",
  guideStandardExplanation:
    "### 動作の仕組み\n\nエージェントがツールを直接呼び出し、ファイルの読み込みや編集、検索、ターミナルコマンドの実行を行います。スキル、プラン、ゴール、サブエージェント、ワークフロー、コンテキストの圧縮を利用できます。\n\n### 選ぶ場面\n\n日常的なコーディング、ファイル作業、調査はこのモードから始めてください。スクリプトの作成やファイルの一括処理も可能です。PTC はツール呼び出しの組み立て方を変えるもので、一括処理に必須ではありません。",
  guideStandardUsage:
    "### バグを修正する\n\n> 検索フォームを2回送信すると結果が消える原因を調べてください。修正し、関連するテストを実行してください。原因と変更点を説明してください。\n\n期待する結果：コードの変更、関連するテストの結果、原因の説明。\n\n### プロジェクトのメモを整理する\n\n> このプロジェクトの Markdown メモを読んでください。合意した決定事項と未解決の質問を、元のファイルへのリンク付きでまとめてください。\n\n期待する結果：元のメモと照合できる参照付きの要約。",
  guidePtcIntro:
    "新しいタスクを始めるときに PTC モードを選択します。入力ファイル、処理ルール、出力形式を指定してください。コードはエージェントが作成します。",
  guidePtcExplanation:
    "### ツールの呼び出し方\n\nPTC は Programmatic Tool Calling の略です。この組み込みプリセットでは、エージェントが run_code を使い、生成された SDK 経由でツールを呼び出す TypeScript プログラムを作成します。必要に応じてループ、条件分岐、エラー処理、並列呼び出しを使えます。\n\n### モデルに渡される内容\n\nツールの結果はまずプログラムに渡され、そこで絞り込みや結合ができます。モデルが受け取るのはプログラムが出力または返す内容で、画像の結果は別途添付されます。入れ子のツール呼び出しも記録され、ツールの権限設定が適用されます。\n\n### スタンダードモードとの違い\n\nどちらのモードでもコーディングや一括処理が可能です。スタンダードモードは個々のツールを直接提供し、PTC はコードでツール呼び出しを組み立てます。現在の PTC プリセットではワークフローツールは無効です。速度やトークン使用量は、タスクとプログラムでの結果の扱い方によって変わります。",
  guidePtcUsage:
    "### 複数の設定ファイルを検査する\n\n> configs/ 内のすべての JSON ファイルを検査してください。schema.json に照らして、必須項目の不足や無効な値を一覧にしてください。問題ごとに1行の CSV を保存してください。読み込めないファイルもレポートに含め、残りの検査を続けてください。元のファイルは変更しないでください。\n\n期待する結果：問題の要約と CSV レポート。プログラムで同じ検査を繰り返し、個別の失敗を処理し、結果をまとめられます。\n\n### エラーログを集計する\n\n> logs/ 内のログファイルを分析してください。サービスとエラーの種類で分類し、頻度の高い上位10グループと各グループの例を1件ずつ示してください。すべての件数を CSV に保存してください。\n\n期待する結果：主なエラーグループと全件の集計表。要約をモデルに渡す前に、プログラムで中間データを集計できます。",
  guideMinimalIntro:
    "新しいタスクにミニマルモードを選択します。比較する場合は、モデル、権限、入力、開始時のワークスペースの状態を各実行で揃えてください。",
  guideMinimalExplanation:
    "### 利用できる機能\n\n状態を保持するシェルツール1つと、固定のシステムプロンプトを備えています。組み込みプリセットでは、スキル、プラン、コンテキストの圧縮、標準のランタイムコンテキストは読み込まれません。\n\n### 選ぶ場面\n\n実験や比較の基準として使ってください。シェルコマンドでファイルの読み込みやスクリプトの実行はできますが、長いタスクを管理する組み込み機能は少なくなります。ツールが少ないからといって、初心者に使いやすいとは限りません。",
  guideMinimalUsage:
    "### 小さなバグ修正で性能を比較する\n\n> このプロジェクトのテストを実行し、失敗の原因を調べて最小限の修正をしてください。関連するテストを再実行し、結果を報告してください。\n\n同じ開始状態から、スタンダードモードとミニマルモードでこのタスクを別々に実行してください。タスクの完了状況、ツール呼び出し、変更内容を比較します。ミニマルモードはターミナルコマンドで作業します。",
  guideCordisIntro:
    "新しいタスクにクリエイターモードを選択します。追加したい機能、表示する場所、確認方法を伝えてください。",
  guideCordisExplanation:
    "### 作成できるもの\n\nクリエイターモードは、標準のタスク用ツールに加え、ランタイムの検査、永続的なプラグイン管理、Cordis プラグインやエージェントプリセットの作成ガイドを備えています。機能や UI を追加するプラグインや、特定の作業に向けてツールとプロンプトを組み合わせたプリセットを作成できます。\n\n### プラグインとモード\n\nプラグインは、ツール、サービスへの接続、UI の項目など、DSH に機能を追加します。モードは、ツールを選び、タスクでのエージェントの動作を定めるプリセットです。カスタムプリセットにプラグインを組み込めます。\n\n### 結果を有効にする方法\n\nソースコードの生成だけでなく、インストールと動作確認も依頼してください。プラグインは変更内容に応じて、すぐに読み込まれる場合と再起動が必要な場合があります。新しく作成したプリセットは、新規タスクの開始時に選択します。",
  guideCordisUsage:
    "### UI を追加する\n\n> サイドバーにプロジェクトのメモ項目を追加する DSH プラグインを作成してください。このワークスペースの Markdown ファイルを一覧から選び、メモをプレビューできるようにしてください。インストールし、ページが開くことを確認してください。\n\n期待する結果：項目とプレビューページが動作する、インストール済みのプラグイン。残っている有効化の手順も示してください。\n\n### ツールを追加する\n\n> このプロジェクトのテストレポートを読み、失敗したテストを要約するツールを備えたプラグインを作成してください。登録し、サンプルレポートで動作を確認してください。\n\n期待する結果：呼び出せるツールを備えたプラグインと、確認済みのサンプル呼び出し。\n\n### 自分のモードを作成する\n\n> スタンダードモードを基に「コードレビュー」モードを作成してください。潜在的なバグやテストの不足を優先し、ファイルのパスと行番号を示し、ファイルを変更する前に確認するようにしてください。選択可能なプリセットとして保存してください。\n\n期待する結果：新規タスク用のカスタムプリセット。レビューの指示はエージェントの行動を導き、実行できる操作は権限設定で決まります。",
};

const settingsLocale: LocaleDictOf<"settings.locale"> = {
  "language.title": "言語",
};

const settingsModels: LocaleDictOf<"settings.models"> = {
  nav: "モデル",
  title: "モデル",
  intro: "各プロバイダーの API キーを入力すると、そのモデルを利用できます。",
  edit: "編集",
  editProvider: "{provider} を編集",
  remove: "削除",
  removeProvider: "{provider} を削除",
  deleteTitle: "{provider} を削除しますか？",
  deleteDescription:
    "{provider} を削除すると、その設定が削除されます。使用している認証情報（ある場合）は別の場所で管理されるため保持されます。",
  deleteDescriptionWithCredential:
    "{provider} を削除すると、その設定と保存済みの API キーが削除されます。",
  deleteConfirm: "{provider} を削除",
  deleting: "{provider} を削除中",
  add: "プロバイダーを追加",
  provider: "プロバイダー",
  close: "閉じる",
  cancel: "キャンセル",
  apply: "保存",
  applying: "保存中",
  savedProvider: "{provider} を保存しました。",
  credentialConfigured: "API キー設定済み",
  credentialMissing: "API キーが未設定",
  readOnly: "このデプロイでは設定ファイルが読み取り専用です。",
  loadFailed: "プロバイダーカタログの読み込みに失敗しました",
  conflict:
    "このカードを開いている間に、設定が別の場所で変更されました。閉じて再度開き、現在の値で編集してください。",
  retry: "再試行",
  keyInput: "API キー",
  keyPlaceholder: "API キーを入力",
  keyPlaceholderNative: "API キーを入力（環境の認証情報を使う場合は空欄のまま）",
  keyStored: "設定済み。新しい値を入力すると置き換わります",
  keyEnvLocked: "起動環境から取得（読み取り専用）",
  customized: "カスタム設定",
  baseUrl: "エンドポイント",
  baseUrlDefault: "プロバイダーのデフォルト",
  models: "モデル",
  modelsInherited: "アダプターのデフォルトモデルを使用中",
  modelsCustomized: "モデルカタログをカスタマイズ済み",
  resetModels: "デフォルトのモデルに戻す",
  model: "モデル",
  modelId: "モデル ID",
  modelName: "表示名",
  modelNamePlaceholder: "空欄の場合はモデル ID を使用",
  contextWindow: "コンテキストウィンドウ",
  contextWindowPlaceholder: "プロバイダーのデフォルトを使用",
  maxTokens: "最大出力トークン数",
  maxTokensPlaceholder: "プロバイダーのデフォルトを使用",
  modelAdvanced: "モデルのオプション",
  addModel: "モデルを追加",
  removeModel: "モデルを削除",
  modelsEmpty: "モデルセレクターには何も表示されません。一覧にない ID もそのまま送信できます。",
  keyBlank: "API キーを入力してください。空欄の場合は保存済みのキーを維持します。",
  keyBlankNew:
    "API キーを入力してください。このプロバイダーが別の方法で認証する場合は空欄にできます。",
  keyIllegalCharacters: "API キーの形式が正しくありません。確認してください。",
  modelIdRequired: "モデル ID は必須です。",
  modelIdDuplicate: "モデル ID は重複できません。",
  modelNameInvalid: "表示名は必須です。",
  modelContextInvalid: "コンテキストウィンドウは正の数で指定してください（例：131072、256K、1M）。",
  modelMaxTokensInvalid: "最大出力トークン数は正の数で指定してください（例：8192、64K、1M）。",
  advancedHint:
    "その他のフィールドは cordis.patch.yml にあります。該当セクションを直接編集してください。",
  modelCapacityInvalid: "容量は数値で指定してください。末尾に K または M を付けられます。",
  modelDuplicate: "モデル ID は重複できません。",
  fetchModels: "利用可能なモデルを取得",
  fetching: "プロバイダーに問い合わせ中",
  fetchNeedsBaseUrl: "先にエンドポイントを入力してから取得してください。",
  fetchEmpty: "このプロバイダーにはモデルが登録されていません。手動で追加してください。",
  fetchTitle: "追加するモデルを選択",
  fetchDescription:
    "以下はプロバイダーで利用可能なモデルです。追加するモデルにチェックを入れてください。",
  fetchSearch: "モデルを検索",
  fetchNoMatches: "一致するモデルがありません。",
  fetchSelectAll: "すべて選択",
  fetchDeselectAll: "すべて解除",
  fetchAdopt: "選択した項目を追加",
  customTag: "カスタム",
  customRoute: "プロバイダー ID",
  customRouteHint:
    "小文字で始まる ID。リクエスト内でこのプロバイダーを一意に識別し、認証情報名としても使用されます。",
  customRouteInvalid: "小文字で始める必要があります。以降は小文字、数字、ハイフンが使用できます。",
  customRouteTaken: "この ID はすでに別のプロバイダーで使用されています。",
  customDisplayName: "表示名",
  customApi: "API プロトコル",
  customApiUnset: "未選択",
  customNeedsBaseUrl: "カスタムプロバイダーにはエンドポイントが必要です。",
  customBaseUrlInvalid: "有効な HTTP または HTTPS の URL を入力してください。",
  customNeedsModels: "カスタムプロバイダーにはモデルが 1 つ以上必要です。",
  customBaseUrlPlaceholder: "https://gateway.example/v1",
  settingsPathUnresolvable: "設定パスを解決できません",
  create: "プロバイダーを作成",
  creating: "作成中",
  welcomeTitle: "プレビュー版のお知らせ",
  welcomeBody:
    "DeepSeek Harness 0.2 はまだプレビュー段階にあり、改善が必要な点が多く残っています。開発者やユーザーの皆様からのフィードバックやご提案をお待ちしております。新しいデスクトップアプリは幅広いユーザーを対象としており、開発者向けの高度な機能は設定から有効にできます。DeepSeek Harness の製品機能とプラグイン API は、今後も急速に進化しながら徐々に安定していく予定です。\n\nオープンソースで、再利用や組み合わせが可能な基盤を土台に、世界中のユーザーや開発者とともに知性の限界を探求できることを楽しみにしています。DeepSeek Harness で皆様のアイデアを形にし、コミュニティに参加してプラグインエコシステムを豊かにしてくださることを歓迎します。",
  welcomeContinue: "続行",
  welcomeError: "確認状態を一時的に保存できません。再試行してください。",
  onboardingTitle: "API キーを追加して始める",
  onboardingDescription: "DeepSeek の公式モデルを設定すると、すぐに使い始められます。",
  onboardingLater: "後で設定",
  onboardingSave: "保存して続行",
  onboardingSaving: "保存中",
  keyRequired: "続行するには API キーを入力してください。",
  deepSeekAccount: "DeepSeek アカウント",
  addMode: "追加方法",
  addCatalog: "サードパーティのモデルプロバイダー",
  addCustom: "カスタムモデルAPI",
  addCatalogHint:
    "組み込みカタログからOpenAI、Anthropic、Kimiなどのプロバイダーを選び、APIキーを入力してください。",
  addCustomHint:
    "ベースURL、プロトコル、モデルを指定して、リレー、セルフホストのサーバー、その他のOpenAI互換またはAnthropic互換のエンドポイントに接続します。",
  addCatalogExhausted: "カタログ内のすべてのプロバイダーは設定済みです。",
  addCustomUnavailable: "指定できるAPIプロトコルがありません。",
  deepSeekBaseUrl: "https://api.deepseek.com/anthropic",
  deepSeekEndpointHint: "Anthropic Messages互換のAPIエンドポイントを使用してください。",
  modelInputTypes: "入力タイプ",
  modelInputText: "テキスト",
  modelInputImage: "画像",
  protocolOpenAiCompletions: "OpenAI Chat Completions",
  protocolOpenAiResponses: "OpenAI Responses",
  protocolAnthropicMessages: "Anthropic Messages",
  customAnthropicBaseUrlPlaceholder: "https://gateway.example",
};

const settingsPermission: LocaleDictOf<"settings.permission"> = {
  title: "権限",
  description: "新しいセッションのデフォルトの権限モードを選択",
  loading: "読み込み中",
  unavailable: "利用不可",
  "preset.readOnly": "閲覧のみ",
  "preset.workspaceWrite": "ワークスペース内の書き込み",
  "preset.fullAccess": "フルアクセス",
  "confirm.title": "フルアクセスを有効にしますか？",
  "confirm.description":
    "フルアクセスを有効にすると、新しいセッションでの確認ステップが減り、機密性の高い操作、ファイル変更、外部コマンドを含むより多くの操作を直接実行できるようになります。以降のタスクを信頼できる場合にのみ使用してください。",
  "confirm.acknowledge": "リスクを理解した上で続行します",
  "confirm.cancel": "キャンセル",
  "confirm.enable": "フルアクセスを有効化",
};

const settingsPluginInventory: LocaleDictOf<"settings.pluginInventory"> = {
  tab: "プラグイン一覧",
  loading: "プラグインを読み込み中",
  error: "プラグインを一時的に読み込めません。",
  retry: "再試行",
  search: "プラグインを検索",
  empty: "利用可能なプラグインがありません。",
  emptySearch: "一致するプラグインがありません。",
  presetTitle: "セッションプラグイン",
  presetSubtitle: "エージェントプリセットがセッションごとに構成します",
  countUnit: "個",
  switcherLabel: "確認するエージェントプリセットを選択",
  presetOptionDefault: "{name}（デフォルト）",
  presetOptionBroken: "{name}（読み込み失敗）",
  globalTitle: "グローバルプラグイン",
  globalSubtitle: "システムとすべてのセッションで共有されます",
  presetProvidedDetail: "グローバルでは無効。エージェントプリセットがセッションごとに提供します",
  enabledIn: "有効な場所",
  viewInPreset: "プリセットグループで表示",
  matchesInOtherPresets: "他のプリセットにさらに {count} 件の一致：",
  failedCountLabel: "失敗",
  enabledTag: "有効",
  disabledTag: "無効",
  conditionalTag: "条件付きで有効",
  presetEnabledTag: "プリセット経由で有効",
  failedTag: "失敗",
  moduleLabel: "モジュール",
  fromPreset: "提供元",
  condition: "無効にする条件",
  configuration: "設定状態",
  runtime: "実行状態",
  unobserved: "未実行",
  pending: "依存関係を待機中",
  loadingPhase: "読み込み中",
  active: "実行中",
  failed: "起動失敗",
  unloading: "アンロード中",
  clientSyncing: "このページのプラグインを同期中…",
  clientSyncFailed:
    "このページで一部のプラグインを同期できませんでした。Host側の有効・無効の設定は変わりません。",
  clientSyncRetry: "このページで再試行",
  metadataError: "パッケージのメタデータエラー: {error}",
};

const settingsPlugins: LocaleDictOf<"settings.plugins"> = {
  nav: "組み込みプラグイン",
  title: "組み込みプラグイン",
  intro: "このデプロイに同梱されているプラグインを確認します。",
  tabs: "プラグインビュー",
  empty: "このデプロイにはプラグインビューがありません。",
};

const settingsTheme: LocaleDictOf<"settings.theme"> = {
  "appearance.title": "外観",
  "appearance.light": "ライト",
  "appearance.dark": "ダーク",
  "appearance.system": "システム",
  "fontSize.title": "文字サイズ",
  "fontSize.description": "会話の本文にのみ適用されます",
  "fontSize.unit": "px",
  "fontSize.increase": "文字を大きくする",
  "fontSize.decrease": "文字を小さくする",
};

const sidebar: LocaleDictOf<"sidebar"> = {
  "session.new": "新規セッション",
  "session.new.label": "新規セッションを作成",
  "toggle.open": "サイドバーを開く",
  "toggle.collapse": "サイドバーを折りたたむ",
  "panels.label": "グローバルパネル",
};

const sidebarCodePreview: Record<SidebarCodePreviewKey, string> = {
  title: "コード",
  copy: "コピー",
  copied: "コピーしました",
};

const sidebarDocumentPreview: LocaleDictOf<"sidebarDocumentPreview"> = {
  loading: "読み込み中",
  loadMore: "さらに読み込む",
  changed: "ファイルが更新されました。表示中の内容は更新前のものです。",
  reloadNow: "再読み込み",
  reload: "ファイルを再読み込み",
  "wrap.enable": "自動折り返しをオン",
  "wrap.disable": "自動折り返しをオフ",
  "wrap.aria": "折り返し",
  openWith: "開き方",
  "viewer.text": "プレーンテキスト",
  resourceUnavailable: "ファイルリソースサービスが利用できません。",
  rendererUnavailable: "{name} プレビューは利用できません。",
  "error.notFound": "ファイルが見つかりません。移動または削除された可能性があります。",
  "error.tooLarge": "このページは {limit} の上限を超えるため読み込めません。",
  "error.notText": "テキストファイルではないため、現時点ではプレビューできません。",
  "error.notRegularFile": "通常のファイルではないため、表示できる内容がありません。",
  "error.unavailable": "読み込みに失敗しました：{message}",
  retry: "再試行",
  autoRefresh: "自動更新",
  "autoRefresh.enable": "自動更新を有効にする",
  "autoRefresh.disable": "自動更新を無効にする",
  unsupportedFile: "このファイル形式のプレビューにはまだ対応していません。",
};

const sidebarFiles: LocaleDictOf<"sidebarFiles"> = {
  "type.label": "ファイル",
  "guide.title": "ワークスペースのファイル",
  "guide.description": "このセッションのワークスペース内のファイルを閲覧",
  loading: "読み込み中",
  empty: "空のディレクトリ",
  truncated: "項目が多すぎるため、一部のみ表示しています。",
  noWorkspace: "このセッションにはワークスペースディレクトリがありません。",
  reload: "再読み込み",
  "entry.other": "ファイルでもディレクトリでもないため、開けません。",
  "error.notFound": "そのディレクトリは存在しません。移動または削除された可能性があります。",
  "error.outsideWorkspace":
    "そのディレクトリはワークスペース外のため、サイドバーでは読み取りません。",
  "error.notDirectory": "それはディレクトリではありません。",
  "error.unavailable": "読み込みに失敗しました：{message}",
  "shortcut.noSession": "先にセッションを選択してください",
  autoRefresh: "自動更新",
  "autoRefresh.enable": "自動更新を有効にする",
  "autoRefresh.disable": "自動更新を無効にする",
};

const sidebarImage: Record<SidebarImageKey, string> = {
  title: "画像",
  preview: "画像プレビュー：{name}",
  loading: "ドキュメントを描画中…",
  failed: "この画像は表示できませんでした。",
  unsupported: "画像のプレビューにはファイル全体の内容が必要です。",
  zoomControls: "ズーム操作",
  zoomMenu: "倍率を選択",
  zoomOut: "縮小",
  zoomIn: "拡大",
  zoomFitWidth: "幅に合わせる",
  zoomValue: "{percent}%",
};

const sidebarPdf: Record<SidebarPdfKey, string> = {
  title: "PDF",
  pageImage: "PDF の {page} ページ",
  loading: "ドキュメントを描画中…",
  rendering: "ページを描画中…",
  failed: "PDF を表示できません：{message}",
  password:
    "この PDF にはパスワードが必要です。パスワード保護されたプレビューには対応していません。",
  workerFailed: "PDF 描画プロセスを継続できませんでした。再試行してください。",
  unsupported: "PDF のプレビューにはファイル全体の内容が必要です。",
  retry: "再試行",
  zoomControls: "ズーム操作",
  zoomMenu: "倍率を選択",
  zoomOut: "縮小",
  zoomIn: "拡大",
  zoomFitWidth: "幅に合わせる",
  zoomValue: "{percent}%",
};

const sidebarRight: LocaleDictOf<"sidebarRight"> = {
  "chrome.expand": "サイドバーを開く",
  "chrome.expandAria": "右サイドバーを開く",
  "chrome.collapse": "サイドバーを折りたたむ",
  "chrome.collapseAria": "右サイドバーを折りたたむ",
  "chrome.toFullscreen": "全画面",
  "chrome.exitFullscreen": "全画面を終了",
  "dock.emptyPane": "空のペイン",
  "dock.splitPane": "分割",
  "dock.splitPaneDisabled": "上限は 2 ペインです",
  "dock.splitPaneNarrow": "幅が足りないため分割できません。サイドバーを広げてください",
  "dock.closeTab": "閉じる",
  "dock.addTab": "新しいタブ",
  "dock.dockFloat": "サイドバーに戻す",
  "dock.closeFloat": "閉じる",
  "dock.drop.center": "ここへ移動",
  "dock.drop.left": "左に分割して追加",
  "dock.drop.right": "右に分割して追加",
  "dock.drop.top": "上に分割して追加",
  "dock.drop.bottom": "下に分割して追加",
  "tab.guide.title": "はじめる",
  "tab.unavailable": "この種類のコンテンツを表示できるビューはまだありません。",
  "command.close": "現在のページまたはウィンドウを閉じる",
  "command.refresh": "現在のページを更新",
  "command.noRefresh": "このページは更新できません",
  "command.toggle": "右サイドバーの表示を切り替え",
  "command.fullscreen": "パネルの全画面表示を切り替え",
  "command.noSession": "先にセッションを選択してください",
  "command.noFocus": "先に右サイドバーのペインにフォーカスしてください",
  "command.stale": "ページが変わりました。もう一度フォーカスしてください",
  "command.collapsed": "先に右サイドバーを展開してください",
  "command.float": "フローティングパネルではこの操作を利用できません",
  "command.empty": "先にページを開いてください",
  "command.budget": "ペインは2つまでです",
  "command.width": "分割するには幅が足りません。サイドバーを広げてください",
};

const skill: LocaleDictOf<"skill"> = {
  "row.title": "スキル",
  "row.running": "スキルを読み込み中",
  "row.failed": "スキルの読み込みに失敗しました",
  "row.stopped": "スキルの読み込みが中止されました",
  "row.instructions": "説明",
  "row.inspect": "詳細を見る",
  "menu.userOnly": "ユーザーのみ",
  "row.preparing": "スキルの読み込みを準備中",
};

const slashMenu: LocaleDictOf<"slash.menu"> = {
  command: "コマンド",
  skill: "スキル",
  subagent: "サブエージェント",
  loading: "読み込み中",
  "drill.aria": "フォルダーを参照",
  "drill.hint": "フォルダーを参照",
  "drill.key": "Tab",
  "crumbs.aria": "フォルダー階層ナビゲーション",
  "suggestions.aria": "トリガー候補の提案",
};

const subagent: LocaleDictOf<"subagent"> = {
  "duration.seconds": "{seconds}秒",
  "duration.minutes": "{minutes}分{seconds}秒",
  "duration.hours": "{hours}時間{minutes}分{seconds}秒",
  "duration.days": "{days}日",
  "duration.daysHours": "{days}日{hours}時間",
  "duration.months": "約{months}ヶ月",
  "duration.monthsDays": "約{months}ヶ月{days}日",
  "duration.years": "約{years}年",
  "duration.yearsMonths": "約{years}年{months}ヶ月",
  "duration.exactDays": "{days}日{hours}時間{minutes}分{seconds}秒",
  "duration.exactTitle": "合計アクティブ時間：{duration}",
  "tokens.thousand": "{value}K",
  "tokens.million": "{value}M",
  "tokens.total": "{value}トークン",
  "loading.label": "サブエージェントを読み込み中",
  "load.error": "サブエージェントを読み込めません",
  retry: "再試行",
  "mode.oneShot": "ワンショット",
  "mode.continuable": "継続可能",
  "activity.running": "実行中",
  "activity.inactive": "停止中",
  "branch.collapse": "{label} 配下のサブエージェントを折りたたむ",
  "branch.expand": "{label} 配下のサブエージェントを展開",
  "count.total.one": "{count} 件のサブエージェント",
  "count.total.other": "{count} 件のサブエージェント",
  "count.running.one": "{count} 件のサブエージェントが実行中",
  "count.running.other": "{count} 件のサブエージェントが実行中",
  "switcher.aria": "サブエージェントを切り替え：{title}",
  "tree.aria": "サブエージェントセッション",
  "readonly.oneShot.title": "ワンショットサブエージェントレコード",
  "readonly.title": "このサブエージェントは一時的に読み取り専用です",
  "readonly.oneShot.body":
    "ワンショットタスクでは追加メッセージに対応していません。ここで完全な実行レコードを確認できます。",
  "readonly.body":
    "親セッションが現在オフラインです。親セッションを再度開くとメッセージの送信を再開できます。",
  "mode.unknown": "不明なモード",
  "readonly.unknown.body": "子セッションを読んで、続行できるか確認してください。",
  "activity.completed": "完了",
  "open.sidebar": "サイドバーで開く",
  "open.sidebar.aria": "{label}をサイドバーで開く",
  "sidebar.chat": "チャット",
};

const trajectory: Record<TrajectoryKey, string> = {
  "view.trajectory": "トレース",
  "toolbar.aria": "トレースツールバー",
  "toolbar.duration": "所要時間",
  "toolbar.useActualDuration": "実際の所要時間を使用",
  "toolbar.useEqualWidth": "操作の幅を揃える",
  "toolbar.actualTime": "実際の時間",
  "toolbar.turns": "ターン",
  "toolbar.expandTurns": "ターンを展開",
  "toolbar.collapseTurns": "ターンを折りたたむ",
  "toolbar.calls": "ツール呼び出し",
  "toolbar.expandCalls": "ツール呼び出しを展開",
  "toolbar.collapseCalls": "ツール呼び出しを折りたたむ",
  "toolbar.search": "トレースを検索",
  "toolbar.searchPlaceholder": "検索",
  "kind.system": "システム",
  "kind.user": "ユーザー",
  "kind.context": "コンテキスト",
  "kind.compacted": "圧縮済み",
  "kind.message": "メッセージ",
  "kind.assistant": "アシスタント",
  "kind.tool": "ツール",
  "kind.subtool": "サブツール",
  "kind.sub": "サブ",
  "column.input": "入力",
  "column.output": "出力",
  "column.think": "思考",
  "column.time": "時間",
  "column.model": "モデル",
  "column.tools": "ツール",
  "turn.label": "ターン {turn}",
  "section.betweenTurns": "ターン間",
  "group.message": "メッセージ",
  "group.step": "ステップ {step}",
  "group.compaction": "圧縮 {seq}",
  "status.failed": "失敗",
  "status.pending": "待機中",
  "status.completed": "完了",
  "timing.notAvailable": "利用できません",
  "timing.notRecorded": "記録なし",
  "timing.stepStartUnavailable": "ステップ開始時刻なし",
  "timing.firstTokenUnavailable": "最初のトークンの時刻なし",
  "timing.usageUnavailable": "使用量なし",
  "timing.outputTokensUnavailable": "出力トークン数なし",
  "timing.durationTooShort": "時間が短すぎます",
  "timing.showLocalTime": "ローカル時刻を表示",
  "timing.showUnixTimestamp": "Unix タイムスタンプを表示",
  "timing.started": "開始",
  "timing.totalDuration": "合計時間",
  "timing.ttft": "最初のトークンまでの時間",
  "timing.generation": "生成",
  "timing.throughput": "スループット",
  "timing.duration": "所要時間",
  "timing.source": "計測ソース",
  "timing.sessionTimestamps": "セッションのタイムスタンプ",
  "timing.sessionTimestampsRunning": "セッションのタイムスタンプ（実行中）",
  "timing.request": "リクエストの計測",
  "unit.milliseconds": "{value} ミリ秒",
  "unit.seconds": "{value} 秒",
  "unit.tokens": "{value}トークン",
  "unit.tokensPerSecond": "{value}トークン/秒",
  "usage.tokens": "トークン",
  "usage.reasoning": "推論",
  "usage.content": "内容",
  "usage.notReported": "使用量は報告されていません",
  "usage.input": "入力",
  "usage.cached": "キャッシュ読み取り",
  "usage.cacheCreated": "キャッシュ書き込み",
  "usage.other": "その他",
  "usage.output": "出力",
  "usage.thisRequest": "このリクエスト",
  "usage.sessionCumulative": "セッション累計",
  "options.notRecorded": "オプションは未記録です",
  "options.json": "リクエストオプションの JSON",
  "source.unknown": "不明",
  "source.user": "ユーザー",
  "source.plugin": "プラグイン",
  "source.pluginNamed": "プラグイン · {plugin}",
  "source.goal": "目標",
  "source.goalRound": "目標 · ラウンド {round}",
  "source.notRecorded": "ソースは未記録です",
  "source.messageJson": "メッセージソースの JSON",
  "tab.summary": "概要",
  "tab.rawOutput": "生の出力",
  "tab.preview": "プレビュー",
  "tab.raw": "生データ",
  "tab.source": "ソース",
  "tab.payload": "パラメーター",
  "tab.result": "結果",
  "tab.schema": "スキーマ",
  "tab.timing": "計測",
  "tab.diff": "差分",
  "tab.systemPrompt": "システムプロンプト",
  "tab.tools": "ツール",
  "tab.options": "オプション",
  "tab.usage": "使用量",
  "record.toolCallOnly": "（ツール呼び出しのみ）",
  "record.noContent": "内容なし",
  "record.noPayload": "取得したパラメーターはありません",
  "record.noResult": "取得した結果はありません",
  "record.noOutput": "出力なし",
  "record.schemaUnavailable": "スキーマは利用できません",
  "record.parameters": "パラメーター",
  "record.resultJson": "結果の JSON",
  "record.json": "JSON",
  "record.parametersJson": "パラメーターの JSON",
  "record.namedParametersJson": "{name} のパラメーター JSON",
  "record.payloadJson": "パラメーターの JSON",
  "record.outputJson": "結果の JSON",
  "record.thinking": "思考",
  "record.systemPromptMissing": "このリクエストにシステムプロンプトはありません",
  "record.toolsMissing": "このリクエストにツールはありません",
  "record.systemPrompt": "システムプロンプト",
  "record.tools": "ツール",
  "block.openSummary": "ブロック #{index} のツール呼び出し概要を開く",
  "block.openSummaryTitle": "ツール呼び出しの概要を開く",
  "block.label": "ブロック #{index} {type}",
  "history.loadingTrajectory": "トレースを読み込み中…",
  "history.loadingEarlier": "より前の履歴を読み込み中…",
  "history.loadingEarlierAria": "より前の履歴を読み込み中…",
  "history.loadEarlier": "より前の履歴を読み込む",
  "history.clickToLoadEarlier": "クリックでより前の履歴を読み込む",
  "request.label": "リクエスト #{request}",
  "request.labelCompaction": "リクエスト #{request} · 圧縮",
  "request.compaction": "圧縮 · {section}",
  "request.compactionPurpose": "圧縮",
  "request.retryProgress": "{retry}/{maximum}",
  "request.collapsedSummary": "折りたたまれた{kind}の概要、{summary}",
  "request.collapsedTurn": "ターン",
  "request.collapsedAssistant": "アシスタント",
  "request.rowAria": "{request}{kind}、{content}",
  "request.rowPrefix": "リクエスト {request}、",
  "request.rowAriaCompaction": "リクエスト {request}、圧縮",
  "request.noContent": "内容なし",
  "summary.toolCalls.one": "{count} 回のツール呼び出し",
  "summary.toolCalls.other": "{count} 回のツール呼び出し",
  "summary.steps.one": "{count} ステップ",
  "summary.steps.other": "{count} ステップ",
  "details.event": "イベントの詳細",
  "details.resize": "イベント詳細の幅を調整",
  "details.resizeTitle": "ドラッグでサイズ変更。ダブルクリックで戻す。",
  "details.close": "詳細を閉じる",
  "details.status": "状態",
  "details.purpose": "用途",
  "details.provider": "提供元",
  "details.model": "モデル",
  "details.toolCalls": "ツール呼び出し",
  "details.subtoolCalls": "サブツール呼び出し",
  "details.error": "エラー",
  "details.failure.auth": "API キーが無効です",
  "details.retry": "再試行",
  "details.scheduled": "予定済み",
  "details.retryDelay": "再試行の待機時間",
  "details.result": "結果",
  "details.compacted": "圧縮済み",
  "details.assistantMessage": "アシスタントのメッセージ",
  "details.source": "ソース",
  "details.hierarchy": "階層",
  "details.toolCall": "ツール呼び出し",
  "timeline.aria": "トレースのタイムライン",
  "timeline.overviewAria": "タイムラインの概要。水平にドラッグしてイベントにフォーカス",
  "timeline.noTimingData": "計測データなし",
  "timeline.total": "合計 {duration}",
  "timeline.started": "{time} に開始",
  "timeline.ttftDecoding": "最初のトークンまで {ttft} · デコード {decoding}",
  "layout.compacting": "圧縮中",
  "layout.compactionFailed": "コンテキスト圧縮に失敗",
  "layout.compacted": "コンテキストを圧縮しました",
  "layout.toolCallOnly": "ツール呼び出しのみ",
  "layout.fileAttachments": "ファイル ×{count}",
  "layout.initialSystemPrompt": "初期システムプロンプト",
  "layout.systemPromptUpdated": "システムプロンプトを更新",
  "layout.toolsUpdated": "ツールを更新",
  "layout.systemPromptAndToolsUpdated": "システムプロンプトとツールを更新",
  "layout.compactionInterrupted": "コンテキスト圧縮は完了前に中断されました。",
  "record.wrapLines": "行を折り返す",
  "code.source": "コード",
  "code.output": "出力",
  "code.copySource": "コードをコピー",
  "code.copyOutput": "出力をコピー",
  "code.originalJson": "元のJSON",
  "code.running": "実行中…",
  "attachment.list": "添付ファイル",
  "attachment.imageName": "画像{index}",
  "layout.imageCount": "画像 ×{count}",
  "layout.toolAdded": "ツールを追加: {name}",
  "layout.toolRemoved": "ツールを削除: {name}",
  "layout.toolUpdateNotice": "ツールを更新",
  "layout.toolsAdded": "追加: {names}",
  "layout.toolsAddedCount": "{count}件追加",
  "layout.toolsChanged": "{added}件追加、{removed}件削除",
  "layout.toolsRemoved": "削除: {names}",
  "layout.toolsRemovedCount": "{count}件削除",
};

const workflowRun: LocaleDictOf<"workflowRun"> = {
  "run.title": "{name}",
  "run.members.one": "{count} メンバー",
  "run.members.other": "{count} メンバー",
  "run.empty": "開始済みのメンバーはいません",
  "phase.unassigned": "フェーズ未割り当て",
  "phase.empty": "空のフェーズ名",
  "statusCount.running": "実行中 {count}",
  "statusCount.completed": "完了 {count}",
  "statusCount.failed": "失敗 {count}",
  "statusCount.cancelled": "キャンセル済み {count}",
  "statusCount.interrupted": "中断済み {count}",
  "member.empty": "空のメンバー名",
  "member.open": "{name} を開く",
  "status.running": "実行中",
  "status.completed": "完了",
  "status.failed": "失敗",
  "status.cancelled": "キャンセル済み",
  "status.interrupted": "中断済み",
};

const workspace: LocaleDictOf<"workspace"> = {
  "group.ungrouped": "未グループ化",
  "session.new": "新規セッション",
  "section.workspaces": "ワークスペース",
  "section.sessions": "セッション",
  "viewOptions.label": "表示設定",
  "groupBy.label": "グループ化",
  "groupBy.workspace": "ワークスペース別",
  "groupBy.flat": "リスト表示",
  "orderBy.label": "並べ替え",
  "orderBy.manual": "手動",
  "orderBy.updated": "更新日時順",
  "sessions.expand": "残り {n} 件のセッションを表示",
  "sessions.collapse": "折りたたむ",
  "empty.none": "セッションがありません",
  "empty.noMatches": "一致する結果がありません",
  "workspace.add": "ワークスペースを追加",
  "search.sessions.aria": "セッションを検索",
  "search.placeholder": "セッション名を検索",
  "search.clear": "検索をクリア",
  "search.results.aria": "検索結果",
  "search.pending": "セッション履歴を検索中",
  "search.noMatches": "一致するセッションがありません",
  "search.hasMore": "最初の {n} 件のみ表示されています。検索範囲を絞り込んでください。",
  "menu.addWorkspace": "ワークスペースを追加",
  "picker.loading": "ワークスペースを読み込み中",
  "conflict.named": "「{name}」という名前のワークスペースはすでに存在します。",
  "folderError.title": "フォルダーを開けません",
  "folderError.retry": "再選択",
  rename: "名前を変更",
  "rename.workspace.title": "ワークスペースの名前を変更",
  "rename.session.title": "セッションの名前を変更",
  "field.workspaceName": "ワークスペース名",
  "field.sessionName": "セッション名",
  "delete.workspace": "ワークスペースを削除",
  "delete.desc":
    "「{name}」をワークスペースリストから削除します。フォルダーとセッション記録は保持され、そのセッションは「未グループ化」の下に表示されます。",
  "delete.pending": "ワークスペースを削除中",
  "menu.fork": "セッションをフォーク",
  "menu.archiveSession": "セッションをアーカイブ",
  "sessions.count.one": "{n} セッション",
  "sessions.count.other": "{n} セッション",
  "actions.workspace.aria": "ワークスペース「{name}」の操作",
  "actions.session.aria": "セッション「{name}」の操作",
  "actions.newSession.aria": "「{name}」に新規セッションを作成",
  "status.running": "実行中",
  "status.subagentsRunning.one": "{n} 件のサブエージェントが実行中",
  "status.subagentsRunning.other": "{n} 件のサブエージェントが実行中",
  "status.idle": "待機中",
  "status.waitingApproval": "承認待ち",
  "status.planReview": "プランレビュー待ち",
  "status.waitingAnswer": "回答待ち",
  "status.completed": "完了",
  "hover.created": "{time} に作成",
  "hover.copied": "コピーしました",
  "date.ymd": "{y}年{m}月{d}日",
  "time.now": "たった今",
  "time.minutes": "{n}分",
  "time.hours": "{n}時間",
  "time.days": "{n}日",
  "time.months": "{n}ヶ月",
  "time.years": "{n}年",
  "time.ago": "{t}前",
  "defaultWorkspace.failed":
    "既定のワークスペースを作成できません。「ワークスペースを選択」からフォルダーを選んでください。",
  "session.untitled": "無題",
  "shortcut.noSession": "先にセッションを選択してください",
  "shortcut.noPicker": "ディレクトリ選択を利用できません",
  "shortcut.directoryBusy": "ワークスペースを選択または追加中",
  "shortcut.noCompletedTurn": "このセッションには完了したターンがありません",
  "shortcut.forkFailed": "セッションを分岐できませんでした。もう一度お試しください。",
  "groupBy.workspaceTree": "ワークスペースツリー",
  "filterBy.label": "セッションを絞り込む",
  "viewOptions.hideArchived": "アーカイブ済みを隠す",
  "viewOptions.showArchived": "すべての会話（アーカイブ済みも表示）",
  "viewOptions.onlyArchived": "アーカイブ済みのみ",
  "empty.noneArchived": "アーカイブ済みのセッションはまだありません",
  "empty.viewOthers": "他のセッションを表示",
  "menu.unarchiveSession": "セッションのアーカイブを解除",
  "menu.pinSession": "セッションをピン留め",
  "menu.unpinSession": "セッションのピン留めを解除",
  "row.archived": "アーカイブ済み",
  "row.pinned": "ピン留め済み",
  "toast.archivedNotOpenable":
    "アーカイブ済みのセッションは開けません。表示するにはアーカイブを解除してください。",
  "toast.archived": "セッションをアーカイブしました。",
  "toast.stoppedAndArchived": "セッションを停止してアーカイブしました。",
  "archive.confirm.title": "このセッションを停止してアーカイブしますか？",
  "archive.confirm.desc":
    "「{title}」にはまだ進行中の作業があります。アーカイブすると、まず作業を停止します。後でサイドバーの「すべての会話（アーカイブ済みも表示）」フィルターからセッションを復元できますが、停止した作業が自動で再開されることはありません。",
  "archive.confirm.activity": "停止する作業",
  "archive.confirm.turn": "実行中のターン",
  "archive.confirm.subagents.one": "実行中のサブエージェント{n}件: {names}",
  "archive.confirm.subagents.other": "実行中のサブエージェント{n}件: {names}",
  "archive.confirm.jobs.one": "バックグラウンドジョブ{n}件: {names}",
  "archive.confirm.jobs.other": "バックグラウンドジョブ{n}件: {names}",
  "archive.confirm.schedules.one": "スケジュール済みのリマインダー{n}件: {names}",
  "archive.confirm.schedules.other": "スケジュール済みのリマインダー{n}件: {names}",
  "archive.confirm.other.one": "その他の作業{n}件（{kind}）",
  "archive.confirm.other.other": "その他の作業{n}件（{kind}）",
  "archive.confirm.listSeparator": "、",
  "archive.confirm.action": "停止してアーカイブ",
  "archive.confirm.pending": "停止してアーカイブ中…",
  "toast.archivedUndo": "元に戻す",
  "toast.archivedOr": "または",
  "toast.archivedFilter": "アーカイブ済みのセッションを絞り込む",
  "toast.pinFailed": "ピン留めできませんでした。後でもう一度お試しください。",
  "toast.unpinFailed": "ピン留めを解除できませんでした。後でもう一度お試しください。",
  "toast.createFailed": "新しいセッションを作成できませんでした: {message}",
  "actions.archive": "アーカイブ",
  "actions.unarchive": "アーカイブ解除",
  "actions.pin": "ピン留め",
  "actions.unpin": "ピン留め解除",
  "actions.newSession": "新しいセッション",
  "status.compact.approval": "承認",
  "status.compact.planReview": "プランのレビュー",
  "status.compact.answer": "回答",
};

const shortcutsLayout: LocaleDictOf<"shortcuts.layout"> = {
  toggle: "左サイドバーの表示を切り替え",
};

const pluginManager: LocaleDictOf<"pluginManager"> = {
  panel: "プラグイン",
  title: "プラグイン",
  intro: "プラグインのインストール・有効化・設定",
  infoLabel: "プラグインについて",
  infoDescription:
    "ここでは公式プラグインの設定や、その他のプラグインのインストール・管理ができます。組み込みプラグインの一覧と実行状況は「設定 → 組み込みプラグイン」で確認できます。",
  loading: "プラグインを読み取り中…",
  error: "すべてのプラグインを読み取れませんでした。ネットワークに問題がある可能性があります。",
  unavailable:
    "この環境には管理可能なプロファイルがないため、ここではプラグインのインストールや切り替えはできません。",
  retry: "再試行",
  refresh: "更新",
  refreshError: "更新に失敗しました。もう一度お試しください。",
  empty: "プラグインはまだインストールされていません。",
  addPlugin: "プラグインを追加",
  restartNotice: "変更は次回起動時に反映されます。",
  overriddenNotice:
    "{name}を保存しましたが、優先度の高い設定で上書きされているため、反映されていません。",
  bundlesTitle: "インストール済み",
  officialTitle: "公式",
  statusProblem: "問題あり",
  statusBeta: "試験的",
  reasonLabel: "理由",
  metadataError: "パッケージのメタデータエラー: {error}",
  versionTag: "v{version}",
  partsLabel: "コンポーネント",
  partsEmpty: "このプラグインパックにはコンポーネントがありません。",
  partsCountTotal: "計{count}件",
  partsCountRunning: "実行中{count}件",
  partsCountOff: "無効{count}件",
  partOff: "無効",
  partsCountFailed: "失敗{count}件",
  partsFilter: "コンポーネントを絞り込む",
  partsFilterEmpty: "該当するコンポーネントはありません。",
  partToggle: "コンポーネント{name}を有効にする",
  rowPhasePending: "依存関係を待機中",
  rowPhaseLoading: "読み込み中",
  rowPhaseActive: "実行中",
  rowPhaseFailed: "問題あり",
  rowPhaseUnloading: "終了処理中",
  enableToggle: "{name}を有効にする",
  openDetail: "{name}を表示",
  backToList: "プラグイン一覧に戻る",
  crumbRoot: "プラグイン",
  backToPackage: "{name}に戻る",
  configureRow: "{name}を設定",
  rowStateIdle: "停止中",
  uninstall: "アンインストール",
  uninstallLabel: "{name}をアンインストール",
  installTitle: "プラグインを追加",
  installDescription:
    "プラグインのパッケージ名、GitHubリポジトリのアドレス、またはローカルディレクトリのパスを入力してください。",
  installSpecLabel: "パッケージ名またはアドレス",
  installSpecPlaceholder: "例: dsh-plugin-whale-pet",
  installGuideToggle: "インストールガイドと入力例",
  installGuideHide: "ガイドを隠す",
  installGuideIdTitle: "プラグインのnpmパッケージ名を入力",
  installGuideIdExample: "dsh-plugin-whale-pet",
  installGuideIdHint:
    "プラグインのパッケージ名は、dsh-xxxや@author/pluginのようなnpmパッケージ名です。コミュニティ製プラグインのREADMEにあるインストールコマンドで、dsh plugin addやpnpm addの後に書かれている部分を入力してください。",
  installGuideExampleLabel: "例: ",
  installGitTemplateHint: "実際のGitリポジトリのアドレスに置き換えてください。",
  installPathTemplateHint: "ローカルのプラグインディレクトリの実際のパスに置き換えてください。",
  installGuideFill: "入力例を使う",
  installGuideFillAria: "入力例{example}を使う",
  installGuideSafety:
    "信頼できるプラグインのみインストールしてください。プラグインはあなたの権限で実行されるため、DeepSeek Harnessを破損させたり、データを漏えいさせたりするおそれがあります。",
  installUpgradeNotice:
    "インストール済みのプラグインは、現時点では自動更新されません。更新するには、アンインストールしてから新しいバージョンをインストールしてください。今後のリリースで更新手順を改善していきます。",
  registryToggle: "レジストリ",
  registryLegend: "プラグインのダウンロード元となるnpmレジストリ",
  registryDefault: "既定のレジストリ",
  registryOfficial: "公式npmレジストリ",
  registryNpmmirror: "中国本土のミラー",
  registryCustom: "任意のアドレス",
  registryCustomPlaceholder: "https://npm.example.com/",
  registryCustomHint:
    "http://またはhttps://で始まる社内・非公開npmレジストリのアドレスを入力してください。ログインが必要な場合は、このマシンの~/.npmrcに認証情報を保存してください。",
  registryCustomInvalid: "http://またはhttps://で始まるアドレスを入力してください。",
  registryListSeparator: "、",
  sentenceSeparator: " ",
  installRun: "インストール",
  installChecking: "確認中…",
  installProblemInvalid: "インストール可能なパッケージ名またはアドレスではありません: {reason}",
  installProblemInstalled:
    "このプラグインはインストール済みです。更新するには、アンインストールしてから再インストールしてください。",
  installProblemShipped:
    "このプラグインはDSHに同梱されています。DSHを更新すると、このプラグインも更新されます。",
  installProblemNotFound: "該当するプラグインが見つかりませんでした。",
  installProblemNotPackage: "パスが存在しないか、有効なプラグインパッケージではありません。",
  installProblemNotBundle:
    "このパッケージにはバンドルの宣言がないため、プラグインとしてインストールできません: {reason}",
  installProblemNetwork:
    "プラグインレジストリに接続できませんでした。ネットワークを確認して再試行してください。",
  installProblemNetworkAll:
    "どのレジストリにも接続できませんでした（試行先: {registries}）。ネットワークやプロキシ設定を確認するか、レジストリを変更してください。",
  installProblemUnknown: "プラグインを検索できませんでした: {reason}",
  installingTitle: "プラグインをインストール中…",
  installedTitle: "インストール済み",
  installFailedTitle: "プラグインをインストールできませんでした",
  installGithubFailedTitle: "GitHubに接続できません",
  installGithubTimeoutTitle: "GitHubへの接続がタイムアウトしました",
  installGithubFailedDescription: "別のインストール元をお試しください。",
  installUseGithubMirror: "中国本土のミラーを使う",
  installTryAnotherWay: "別の方法を試す",
  installPackageLabel: "プラグインのパッケージ名",
  installEdit: "編集",
  installEditAria: "編集に戻る",
  installCancelAndEdit: "インストールをキャンセルして編集に戻る",
  installApplyingCancellationError:
    "キャンセルを確認できませんでした。インストールの反映中です。結果をお待ちください。{reason}",
  installReconcile: "インストール状況を確認",
  installUnknownTitle: "インストール結果を取得できません",
  installUnknownDescription:
    "Hostには、このリクエストIDで進行中のインストールがありません。再試行する前にプラグイン一覧を確認してください。",
  installResultUnconfirmed:
    "インストール結果を受信できませんでした。インストール状況を確認してください。{reason}",
  installAwaitingAcceptance:
    "Hostによるインストールの受け付けを待っています。受け付けを確認後、キャンセルを自動で再試行します。",
  installBackgroundUnknown: "インストール結果を取得できません。プラグイン一覧を確認してください。",
  installCancel: "インストールをキャンセル",
  installCloseCancels: "インストールをキャンセルして閉じる",
  installViewTask: "インストール状況を表示",
  installUnconfirmedTitle: "インストール状況が未確認です",
  installBackgroundDone: "インストールが完了しました。インストールの詳細を確認してください。",
  installBackgroundFailed: "インストールに失敗しました。インストールの詳細を確認してください。",
  installBackgroundUnconfirmed:
    "インストール状況が未確認です。インストールの詳細を確認してください。",
  installBackgroundApplying:
    "インストールの反映中のため、キャンセルできません。インストールの進行状況を確認してください。",
  installStarting: "インストールを準備中…",
  installCancelling: "インストールを停止中…",
  installApplying: "設定を反映中です。お待ちください…",
  installCancelledShort: "キャンセル済み",
  installCancelled:
    "インストールをキャンセルしました。プラグインは有効になっていません。ダウンロード済みのファイルが残っている場合があります。",
  installCancelUnconfirmed:
    "インストールの停止を確認できていません。キャンセルを再試行するか、インストール結果をお待ちください。{reason}",
  installEnableNow: "今すぐ有効化",
  installDetailsShow: "インストールの詳細を表示",
  installDetailsHide: "インストールの詳細を隠す",
  installVersion: "バージョン{version}",
  installSubjectPath: "ローカルディレクトリ",
  installSubjectGit: "Gitリポジトリ",
  installSubjectTarball: "tarball ファイル",
  installLocation: "インストール先: {dir}",
  installRetry: "再試行",
  installChangeRegistry: "レジストリを変更",
  installAttempt:
    "{previous}からパッケージを取得できませんでした。{registry}で再試行しています（レジストリ{index}/{total}）。",
  installAttemptBadge: "試行{index} · {registry}",
  installFailureNetwork: "ネットワーク接続に失敗しました。",
  installFailureNetworkAll:
    "どのレジストリにも接続できませんでした（試行先: {registries}）。ネットワークやプロキシ設定を確認するか、レジストリを変更して再試行してください。",
  installFailureNetworkHost:
    "{host}に接続できませんでした。GitHubのアドレスや.tgzリンクからの取得はレジストリを経由しません。このマシンから直接、またはプロキシ経由で接続する必要があります。プラグインがnpmでも公開されている場合は、代わりにパッケージ名を入力してください。",
  installFailureNotFound: "該当するプラグインが見つかりませんでした。",
  installFailureNoMatchingVersion: "指定に一致するバージョンがありません。",
  installFailureDiskFull: "ディスクの空き容量がないため、インストールを停止しました。",
  installFailurePermission: "書き込み権限がないため、プラグインをインストールできません。",
  installFailureBuildBlocked:
    "インストールを続けるには、依存パッケージのインストールスクリプトを許可する必要があります。",
  installFailureBuildBlockedManual:
    "pnpmがインストールスクリプトをブロックしました。pnpm-workspace.yamlのallowBuildsで許可してから再試行してください。",
  installFailureIntegrity: "ダウンロードしたパッケージの整合性チェックに失敗しました。",
  installFailureTimeout: "インストールがタイムアウトしました。",
  installFailurePnpmMissing: "pnpmが見つからないため、インストールできません。",
  installFailureGeneric: "インストール中にエラーが発生しました。詳細を確認してください。",
  terminalRunning: "実行中",
  terminalFailed: "失敗",
  terminalDone: "完了",
  terminalCopy: "コピー",
  terminalCopied: "コピー済み",
  terminalNoOutput: "出力なし",
  terminalCollapseAria: "出力を折りたたむ",
  terminalCollapse: "折りたたむ",
  terminalExpandAria: "残り{n}行の出力を展開",
  terminalExpand: "… 残り{n}行",
  terminalExitCode: "終了コード{code}",
  terminalSignal: "シグナル{signal}",
  terminalNoExitCode: "終了コードなし",
  installDoneNothing: "インストールが完了しました。新しい依存パッケージは追加されていません。",
  installDoneRestart: "インストールしました。次回起動時に読み込まれます。",
  installDoneApproved: "{names}のインストールスクリプトを許可しました。",
  installApprovalTitle: "インストールスクリプトの許可が必要です",
  installApprovalDescription:
    "これらのパッケージには、pnpmが実行しなかったインストールスクリプトがあります。",
  installApprovalConsequence:
    "許可すると、スクリプトはこのマシンであなたの権限で実行されます。許可はこのプロファイルに保存されます。",
  installApprovalCaution: "信頼できるパッケージのみ許可してください。",
  installApproveAndRetry: "スクリプトを許可して再試行",
  installClose: "完了",
  close: "閉じる",
  cancel: "キャンセル",
  confirmUninstallTitle: "「{name}」をアンインストールしますか？",
  confirmUninstallDescription:
    "アンインストールすると、このプラグインが提供する機能は利用できなくなります。",
  confirmUninstall: "アンインストール",
  failedEnable: "有効にできませんでした: {reason}",
  failedDisable: "無効にできませんでした: {reason}",
  failedUninstall: "アンインストールできませんでした: {reason}",
  failedRowEnable: "コンポーネントを有効にできませんでした: {reason}",
  failedRowDisable: "コンポーネントを無効にできませんでした: {reason}",
  reasonManagementRequired: "プラグイン管理に必要なため、無効化やアンインストールはできません。",
  reasonUnaddressable: "プロファイルのパッチでは、この対象を一意に指定できません。",
  reasonUnknownPlugin: "該当するプラグインはありません。",
  reasonInvalidSpec: "有効なパッケージ名またはアドレスを入力してください。",
  reasonAmbiguousInstall:
    "依存関係の変更から、どのパッケージがインストールされたかを特定できません。",
  reasonNotBundle: "このパッケージにはバンドルの宣言がないため、プラグインとして管理できません。",
  reasonNotRemovable:
    "このパッケージはプロファイルの管理対象ではないか、プラグイン管理に必要です。",
  reasonStopProfile:
    "このプロファイルではHMRが使われていません。プロファイルを停止し、dsh pluginでパッケージをアンインストールしてください。",
  reasonBundleInUse:
    "他の設定で、このバンドルのコンポーネントがまだ使われています。先にそれらを無効にしてください。",
  reasonStaleApproval:
    "許可待ちのスクリプトが変更されました。再インストールして、許可の対象を更新してください。",
  reasonIncompatibleVersion:
    "{plugin}はDSH {runtime}と互換性がありません（必要なバージョン: {peers}）。実行すると、クラッシュやデータ損失が発生するおそれがあります。",
  reasonIncompatibleVersionUnnamed:
    "このプラグインは、実行中のDSHのバージョンと互換性がありません。実行すると、クラッシュやデータ損失が発生するおそれがあります。",
  reasonIncompatibleInstall:
    "このDSHと互換性のあるプラグインのバージョンをインストールしてください。",
  reasonIncompatibleInstalled:
    "アンインストールしてから、このDSHと互換性のあるバージョンをインストールしてください。",
  reasonOperationError: "Hostからエラーが報告されました。",
};

const settingsAccount: LocaleDictOf<"settings.account"> = {
  modelSignInRequired: "モデルを利用できません。サインインして、もう一度お試しください。",
  sessionExpired: "アカウントからサインアウトしました。もう一度ログインしてください。",
  onboardingArtworkLocale: "en",
  onboardingWelcome: "ようこそ",
  onboardingBrand: "DeepSeek Harness",
  onboardingIntroduction:
    "DeepSeek Harnessはローカルフォルダーで動作し、ツールを使ってコンピューター上のファイルを読み書きします。情報の調査や整理、文書やスプレッドシートの作成、コードの作成、問題の解決などを手伝います。",
  onboardingStart: "はじめる",
  onboardingCredit: "クレジットを追加",
  onboardingCreditDescription:
    "DeepSeek Harnessはモデルとツールが使用したトークンに応じてクレジットを消費します。タスクが中断しないよう、事前にクレジットを追加してください。残高が消費されるのは、エージェントがタスクに取り組んでいる間だけです。",
  onboardingTopUp: "クレジットを追加",
  onboardingLater: "次へ",
  onboardingFundedTopUp: "クレジットを追加",
  onboardingPurposePrefix: "",
  onboardingPurposeSuffix: "に何を手伝ってほしいですか？",
  onboardingPurposeDescription: "使い方に合わせてインターフェースとツールを調整します。",
  onboardingOffice: "事務・クリエイティブ作業",
  onboardingOfficeDescription: "文書の編集、データの整理、プレゼンテーションの作成など",
  onboardingDevelopment: "コーディング・開発",
  onboardingDevelopmentDescription:
    "コードの編集、デバッグ、コマンドの実行、プロジェクトファイルの管理など",
  onboardingContinue: "続ける",
  onboardingProcess: "どのくらい詳しく表示しますか？",
  onboardingProcessDescription:
    "進行状況の表示方法だけが変わります。DeepSeek Harnessができることは変わりません。",
  onboardingCompact: "結果のみ",
  onboardingCompactDescription: "結果だけを表示する、シンプルなインターフェース",
  onboardingStandard: "主な詳細",
  onboardingStandardDescription: "結果を中心に、重要なステップと操作だけを表示",
  onboardingDetailed: "すべての詳細",
  onboardingDetailedDescription: "デバッグや問題の調査のため、全過程を表示",
  onboardingEnter: "アプリを開く",
  onboardingBack: "戻る",
  onboardingSkip: "スキップ",
  onboardingSkipTitle: "設定をスキップしますか？",
  onboardingSkipDescription:
    "進行状況、パフォーマンス、使用量の表示方法やコーディングツールの有効化は、「設定 → 一般」でいつでも変更できます。",
  onboardingKeepSetting: "設定を続ける",
  onboardingNoCreditTitle: "クレジットの追加をスキップしますか？",
  onboardingNoCreditDescription:
    "クレジットがないとDeepSeek Harnessは新しいタスクを開始できません。後で「設定 → アカウント」から追加できます。",
  onboardingUnderstood: "了解",
  onboardingGoTopUp: "クレジットを追加",
  onboardingSaveFailed: "設定を保存できませんでした。もう一度お試しください。",
  onboardingRetry: "再試行",
  onboardingLoading: "設定を読み込み中…",
  close: "閉じる",
  addApiKey: "APIキーを追加",
  retry: "もう一度サインイン",
  loginTitle: "はじめる",
  loginDescription:
    "DeepSeekアカウントでサインインするか、APIキーを追加してはじめてください。プロジェクトとファイルはローカルに保存されます。",
  browserTitle: "サインインを待っています",
  browserPrompt: "ページが自動で開かない場合は、",
  copyLink: "サインインリンクをコピー",
  copiedLink: "リンクをコピーしました",
  copyFailed: "コピーできませんでした",
  browserDescription: "してからブラウザーで開き、サインインを完了してください。",
  timeoutTitle: "サインインがタイムアウトしました",
  timeoutDescription: "続行するには、もう一度サインインしてください。",
  failureTitle: "サインインできませんでした",
  platformFailed: "操作を完了できませんでした。もう一度お試しください。",
  platformRetry: "再試行",
  loading: "読み込み中…",
  backToHarness: "DeepSeek Harnessに戻る",
  settings: "設定",
  contactUs: "フィードバック",
  menu: "アカウントメニュー",
  nav: "アカウント",
  signedIn: "DeepSeekにサインイン済み",
  signedOut: "未サインイン",
  signIn: "サインイン",
  signOut: "サインアウト",
  signOutUnknownDescription:
    "実行中のタスクを確認できませんでした。サインアウトすると、このアカウントを使用するタスクが中断される可能性があります。今すぐサインアウトしますか？",
  signOutDescription:
    "サインアウトしてもデータは削除されません。このアカウントには再びサインインできます。",
  signOutRunningDescription:
    "現在タスクを実行中です。サインアウトするとタスクが中断されます。今すぐサインアウトしますか？",
  cancel: "キャンセル",
  open: "ブラウザーを開く",
  initializing: "サインインを開始中…",
  waiting: "ブラウザーで続けてください",
  completing: "サインインを完了中…",
  expired: "サインインの期限が切れました。もう一度お試しください。",
  failed: "操作を完了できませんでした。もう一度お試しください。",
  settingsSignedOutTitle: "DeepSeek Harnessにサインインしていません",
  settingsSignedOutDescription: "DeepSeek Harnessにサインインして、専用のAPIキーを取得してください",
  signInDescription: "DeepSeekアカウントではじめましょう。",
  profileUnavailable: "アカウントの詳細はまだ利用できません。",
  balance: "チャージ残高",
  bonusBalance: "付与残高",
  balanceUnavailable: "プラットフォームで確認",
  balanceSignedOut: "サインインして確認",
  accountInfo: "アカウントの詳しい情報",
  more: "その他",
  usage: "使用量を確認",
  topUp: "チャージ",
  quotaTitle: "利用できる残高がありません",
  quotaDescription:
    "残高がないと、DeepSeek Harnessはこのアカウントで新しいタスクを開始できません。チャージしますか？後で「設定 → アカウント」からチャージすることもできます。",
  quotaTopUp: "チャージ",
  bonusNoticeTitle: "ボーナスが付与されました",
};

const settingsAgentLoop: LocaleDictOf<"settings.agentLoop"> = {
  title: "エージェントループ",
  description: "エージェントによるツール呼び出しの実行方法を設定します。",
  maxParallel: "ツール呼び出しの並列数",
  maxParallelHint: "1ステップ内で安全に並列実行できる呼び出しの同時実行数の上限です。",
  overridden: "上書きされています",
  reset: "既定値に戻す",
  readOnly: "この環境の設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "この環境では入力値を受け付けられませんでした。修正できるよう、入力値は残しています。",
  invalidNumber: "数値を入力するか、空欄にして既定値を使用してください。",
};

const settingsSessionLog: LocaleDictOf<"settings.sessionLog"> = {
  title: "公式モデルAPI使用時にセッションログをアップロード",
  description: "DeepSeekのモデルと製品の改善に協力します。",
  saved: "設定を保存しました",
  failed: "設定を保存できませんでした",
};

const settingsShell: LocaleDictOf<"settings.shell"> = {
  title: "シェル",
  description: "各コマンドの実行時間と出力量を制限します。",
  timeoutMs: "コマンドのタイムアウト（ms）",
  timeoutMsHint: "1つのコマンドが強制終了されるまでの実行時間です。",
  maxOutputBytes: "ストリームごとの出力上限（バイト）",
  maxOutputBytesHint: "上限を超えた出力は破棄せず、一時ファイルに保存します。",
  overridden: "上書きされています",
  reset: "既定値に戻す",
  readOnly: "この環境の設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "この環境では入力値を受け付けられませんでした。修正できるよう、入力値は残しています。",
  invalidNumber: "数値を入力するか、空欄にして既定値を使用してください。",
};

const settingsSubagent: LocaleDictOf<"settings.subagent"> = {
  overridden: "上書きされています",
  reset: "既定値に戻す",
  readOnly: "この環境の設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "この環境では入力値を受け付けられませんでした。修正できるよう、入力値は残しています。",
  subagentTitle: "サブエージェント",
  subagentDescription: "サブエージェントの再帰の深さ、数、モデルを設定します。",
  subagentLimitsTitle: "制限",
  subagentMaxDepth: "再帰の最大深度",
  subagentDepthHelpLabel: "再帰の最大深度について",
  subagentDepthHelp: "エージェントが作成できるサブエージェントの階層数を制限します。",
  subagentDepthZero: "サブエージェントを無効にする",
  subagentDepthOne: "メインエージェントのみがサブエージェントを作成できます",
  subagentDepthOverride:
    "ツールが独自の再帰の最大深度を定義している場合は、その設定が優先されます。",
  subagentMaxActive: "サブエージェントの同時実行数の上限",
  subagentCapacityHelpLabel: "サブエージェントの同時実行数の上限について",
  subagentCapacityHelp:
    "同じメインエージェント配下で稼働中のサブエージェントの合計数です。すべての再帰階層を含み、メインエージェント自身は含みません。上限に達すると、新たな起動要求は拒否されます。",
  subagentDepthInvalid: "0以上の整数を入力してください。",
  subagentCapacityInvalid: "1以上の整数を入力してください。",
  subagentModelSelectionTitle: "モデル選択",
  subagentModelSelectionToggle: "エージェントがサブエージェントのモデルを選択できるようにする",
  subagentModelSelectionChoose:
    "有効にすると、エージェントは下記の許可済みモデルから、サブエージェントごとにプロバイダー、モデル、思考レベルを選択できます。新しいセッションにのみ適用されます。",
  subagentModelSelectionAllowed: "エージェントが選択できるモデル",
  subagentModelSelectionLoading: "モデルを読み込み中…",
  subagentModelSelectionLoadFailed: "モデルを読み込めませんでした。",
  subagentModelSelectionRetry: "再試行",
  subagentModelSelectionPartial:
    "一部のモデルプロバイダーを読み込めませんでした。保存済みの選択肢は削除できます。",
  subagentModelSelectionUnavailable: "現在利用できません",
  subagentModelSelectionUnavailableGroup: "保存済み（現在利用できません）",
  subagentModelSelectionEmpty: "現在、モデルを提供しているプロバイダーがありません。",
  subagentModelSelectionRequired: "保存する前に、モデルを1つ以上選択してください。",
  subagentModelSelectionConflict:
    "別の場所で設定が変更されました。編集中の内容を破棄して、もう一度お試しください。",
  subagentModelSelectionOff:
    "サブエージェントは設定済みの既定値を使うか、親エージェントのモデルを引き継ぎます。保存済みのモデルの選択肢は保持されます。",
};

const settingsWebSearch: LocaleDictOf<"settings.webSearch"> = {
  title: "Web検索",
  description: "DeepSeekの検索プロバイダーを設定します。",
  apiKey: "APIキー",
  apiKeyHint: "設定ファイルとは別に保存されます。現在のキーを保持するには、空欄にしてください。",
  apiKeySet: "キーは設定済みです。",
  apiKeyUnset:
    "キーが未設定のため、DeepSeek Accountのモデルを使用する会話のみ、既定のエンドポイント経由で検索できます。",
  baseUrl: "エンドポイント",
  baseUrlHint: "空欄にするとプロバイダーの既定値を使用します。",
  maxUses: "リクエストごとの検索回数の上限",
  maxUsesHint: "1つのリクエストで回答するまでに検索できる回数です。",
  overridden: "上書きされています",
  reset: "既定値に戻す",
  readOnly: "この環境の設定は読み取り専用です。",
  unavailable: "このプラグインは読み込まれていないため、現在は設定できません。",
  save: "保存",
  saving: "保存中…",
  saveFailed:
    "この環境では入力値を受け付けられませんでした。修正できるよう、入力値は残しています。",
  invalidNumber: "数値を入力するか、空欄にして既定値を使用してください。",
};

const shortcuts: LocaleDictOf<"shortcuts"> = {
  "edit-label": "{command}のショートカットを編集",
  record: "ショートカットキーを押してください",
  "record-help": "キーを離すと保存します。Tabで操作間を移動し、Escでキャンセルします。",
  "web-help":
    "ブラウザー用の組み合わせ: Mod+/、Mod+Shift+,、Mod+Shift+.。ModはMacではCommand、それ以外ではCtrlです。",
  "unsupported-key": "このキーには対応していません。",
  reserved: "この組み合わせはシステム操作またはテキスト編集用に予約されています。",
  "modifier-required": "Command、Ctrl、Altのいずれかを組み合わせてください。",
  "too-many-keys": "修飾キー以外は2つまで押せます。キーを離して、もう一度お試しください。",
  "macos-web-help":
    "Command+/、Command+,、Command+Backslash、Control+Backquote、Command+Option+key、Command+Shift+keyを使用してください。異なる修飾キーを3つまたは4つ組み合わせることもできます。ブラウザーやシステムのショートカットは、ページに届かない場合があります。",
  "windows-web-help":
    "Ctrl+/、Ctrl+,、Ctrl+Alt+key、Ctrl+Shift+keyを使用してください。異なる修飾キーを3つまたは4つ組み合わせることもできます。ブラウザーやシステムのショートカットは、ページに届かない場合があります。",
  "unsupported-browser": "このブラウザーでは、この組み合わせにまだ対応していません。",
  conflict: "「{commands}」がすでに使用しています",
  saved: "変更済み",
  clear: "削除",
  "retry-save": "保存を再試行",
  reset: "既定値に戻す",
  "reset-all": "すべて既定値に戻す",
  "modified-count": "{count}件をカスタマイズ",
  "reset-title": "すべてのショートカットを既定値に戻しますか？",
  "reset-description":
    "このプラットフォームのショートカットを既定値に戻します。変更または削除したショートカットはすべて復元されます。他のプラットフォームには影響しません。",
  cancel: "キャンセル",
  "reset-saved": "ショートカットを既定値に戻しました",
  "close-confirmation": "確認を閉じる",
  "reset-failed":
    "既定値に戻せませんでした。ショートカットは変更されていません。もう一度お試しください。",
  review: "最新の設定を確認しました",
  stale:
    "ショートカットの設定または使用できるコマンドが変更されました。保存する前に最新の割り当てを確認してください。",
  "write-failed":
    "保存できませんでした。以前のショートカットと現在の編集内容は保持されています。もう一度お試しください。",
  "not-ready": "ショートカットの準備ができていません。もう一度お試しください。",
  read: "{location}を読み取れませんでした。アクセス権限を確認して、{reload}。",
  invalid:
    "{location}のショートカット設定が破損しています。この設定をバックアップして修復し、{reload}。",
  future:
    "{location}のショートカット設定は新しいバージョンで作成されています。Harnessをアップグレードして、もう一度お試しください。",
  "web-document": "このサイトのlocalStorageエントリdsh.keybindings.v1",
  "desktop-document": "userData/keybindings.json",
  "web-reload": "ページを再読み込みしてください",
  "desktop-reload": "Harnessを再起動してください",
  "using-defaults": "既定のキー割り当てが有効です。",
  "using-accepted": "最後に正常に読み取れたキー割り当てが引き続き有効です。",
  "native-failed":
    "デスクトップのキー入力記録を保護できませんでした。記録を終了して、もう一度お試しください。",
  "global-hint": "どこからでも開く",
  "clear-search": "検索をクリア",
  title: "キーボードショートカット",
  open: "キーボードショートカットを開く",
  settings: "キーボードショートカット",
  view: "ショートカットを編集",
  description: "利用できるショートカットと入力操作を確認・編集します",
  search: "ショートカットを検索",
  close: "キーボードショートカットを閉じる",
  application: "アプリケーション",
  input: "メッセージ入力",
  menus: "メニューとダイアログ",
  approval: "承認エリア",
  unbound: "ショートカットなし",
  empty: "一致するショートカットがありません",
  move: "メニューの選択を移動",
  select: "メニュー項目を選択",
  dismiss: "メニューまたは最前面のダイアログを閉じる",
};

const sidebarBrowser: LocaleDictOf<"sidebarBrowser"> = {
  "type.label": "ブラウザー",
  "guide.title": "ブラウザー",
  "guide.description": "Webページを閲覧",
  "shortcut.noSession": "先にセッションを開いてください",
  "address.placeholder": "HTTP(S)アドレスを入力",
  "address.changed": "URLが変更されました",
  back: "戻る",
  forward: "進む",
  reload: "再読み込み",
  go: "移動",
  external: "システムのブラウザーで開く",
  "sandbox.disable": "サンドボックスの制限を無効にする",
  "sandbox.enable": "サンドボックスの制限を戻す",
  "sandbox.warning":
    "サンドボックスの制限が無効です。ページからアプリ全体の画面遷移、ダウンロード、モーダルダイアログ、入力のロックを使用できます。",
  start: "HTTP(S)アドレスを入力して閲覧を開始",
  loading: "開いています…",
  "restore.previous": "以前開いたページ",
  "restore.action": "ページを復元",
  "error.empty": "アドレスを入力してください。",
  "error.invalid": "アドレスが無効か、長すぎます。",
  "error.protocol":
    "HTTPとHTTPSのアドレスのみ対応しています。ローカルファイルにはドキュメントプレビューを使用してください。",
  "error.credentials": "アドレスにユーザー名やパスワードを含めることはできません。",
  "error.application-origin": "埋め込みブラウザーではDSHアプリ自体を開けません。",
  "load.failed":
    "ページを読み込めませんでした。再読み込みするか、システムのブラウザーで開いてください。",
  "load.failed.detail": "ページの読み込みに失敗しました（{code}）: {description}",
  "address.unknown": "ページが移動しましたが、この表示環境では新しいURLを読み取れません。",
};

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarOfficeKey =
  | "title"
  | "loading"
  | "retry"
  | "viewMissingFonts"
  | "missingFontsTitle"
  | "missingFontsDescription"
  | "missingFontsCount"
  | "closeDetails"
  | "unavailable"
  | "invalid"
  | "tooLarge"
  | "failed"
  | "timeout"
  | "busy"
  | "changed";

const sidebarOffice: Record<SidebarOfficeKey, string> = {
  title: "Office ドキュメント",
  loading: "ドキュメントを描画中…",
  retry: "再試行",
  viewMissingFonts: "不足しているフォント：{count}件。クリックで詳細を表示。",
  missingFontsTitle: "不足しているフォント",
  missingFontsDescription:
    "これらのフォントはプレビューで利用できません。文字やレイアウトが元のドキュメントと異なる場合があります。",
  missingFontsCount: "フォント：{count}件",
  closeDetails: "フォントの詳細を閉じる",
  unavailable:
    "Office プレビューを利用できません。DeepSeek Harness を実行しているコンピューターでドキュメントプレビューサービスを有効にしてください。",
  invalid:
    "この Office ファイルをプレビューできません。ファイルの破損、パスワード保護、拡張子の誤りが考えられます。",
  tooLarge:
    "Office ファイルまたは変換後の PDF がプレビューのサイズ上限を超えています。ファイルサイズを小さくするか、プレビューの設定を変更してください。",
  failed:
    "Office ファイルを利用可能な PDF に変換できませんでした。ファイルを確認して再試行してください。",
  timeout: "Office ファイルの変換がタイムアウトしました。再試行してください。",
  busy: "Office プレビューは処理中です。少し待ってから再試行してください。",
  changed: "読み込み中にファイルが変更されました。プレビューを開き直してください。",
};

/** Keys of @deepseek-ai/dsh-client-ui-sidebar-documentpreview@0.2.0-rc.2 (registers through the untyped overload). */
type SidebarExcelKey =
  | "title"
  | "language"
  | "loading"
  | "invalid"
  | "tooLarge"
  | "timeout"
  | "encoding"
  | "formulaWarning"
  | "unsupportedNotice"
  | "charts"
  | "images"
  | "shapes"
  | "conditionalFormatting"
  | "featureSeparator"
  | "retry";

const sidebarExcel: Record<SidebarExcelKey, string> = {
  title: "スプレッドシート",
  // The bundled workbook renderer supports no Japanese locale.
  language: "en",
  loading: "ドキュメントを描画中…",
  invalid: "このスプレッドシートを開けませんでした。形式、内容、パスワード保護を確認してください。",
  tooLarge: "このブックはプレビューのサイズ上限を超えています。",
  timeout: "ブックを開く処理がタイムアウトしました。小さいファイルで試してください。",
  encoding:
    "この文字コードを読み取れませんでした。UTF-8 または BOM 付きの UTF-16 で保存して再試行してください。",
  formulaWarning:
    "このブックには数式が含まれています。表示される結果が欠けたり、不正確になったりする場合があります。",
  unsupportedNotice:
    "このプレビューでは、ブック内の{features}に対応していません。すべての機能を利用するには、システムのアプリケーションで開いてください。",
  charts: "グラフ",
  images: "画像",
  shapes: "図形",
  conditionalFormatting: "条件付き書式",
  featureSeparator: "、",
  retry: "再試行",
};

export const DICTS: Record<string, Record<string, string>> = {
  approval: approval,
  chat: chat,
  command: command,
  common: common,
  conversation: conversation,
  cordis: cordis,
  deliverables: deliverables,
  "directory-browser": directoryBrowser,
  documentHtml: documentHtml,
  documentMarkdown: documentMarkdown,
  feedback: feedback,
  goal: goal,
  job: job,
  model: model,
  "open-in-app": openInApp,
  "permission.access": permissionAccess,
  plan: plan,
  question: question,
  reference: reference,
  "session-log-download": sessionLogDownload,
  settings: settings,
  "settings.agentPreset": settingsAgentPreset,
  "settings.locale": settingsLocale,
  "settings.models": settingsModels,
  "settings.permission": settingsPermission,
  "settings.pluginInventory": settingsPluginInventory,
  "settings.plugins": settingsPlugins,
  "settings.theme": settingsTheme,
  sidebar: sidebar,
  sidebarCodePreview: sidebarCodePreview,
  sidebarDocumentPreview: sidebarDocumentPreview,
  sidebarFiles: sidebarFiles,
  sidebarImage: sidebarImage,
  sidebarPdf: sidebarPdf,
  sidebarRight: sidebarRight,
  skill: skill,
  "slash.menu": slashMenu,
  subagent: subagent,
  trajectory: trajectory,
  workflowRun: workflowRun,
  workspace: workspace,
  "shortcuts.layout": shortcutsLayout,
  pluginManager: pluginManager,
  "settings.account": settingsAccount,
  "settings.agentLoop": settingsAgentLoop,
  "settings.sessionLog": settingsSessionLog,
  "settings.shell": settingsShell,
  "settings.subagent": settingsSubagent,
  "settings.webSearch": settingsWebSearch,
  shortcuts: shortcuts,
  sidebarBrowser: sidebarBrowser,
  sidebarOffice: sidebarOffice,
  sidebarExcel: sidebarExcel,
};
